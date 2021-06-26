import * as DosenDAO from '../dao/Dosen'
import * as PengajarDAO from '../dao/Pengajar'
import { validationResult } from 'express-validator'

/*
  Catatan:
  1.Jangan lupa gunakan format yang telah disepakati saat mengirimkan
  respon ke FE

  2.Untuk validasi dan sanitasi input simpan di file middleware/InputValidatorSanitizer.js,
  pada file ini hanya cek apakah ada error atau engga (cek nya pake validationResult)

  3.Kalo mau bikin error handling :
  custom error example jika ingin throw error
  const error = new Error("message nya apa");
  error.statusCode = 4xx;
  error.cause = `tulis cause nya apa`;
  throw error;

  nanti di catch nya tinggal :
  next(error)
*/

export const getDosenByNIP = async (req, res, next) => {
  try {
    const { NIP } = req.params
    const dosen = await DosenDAO.findDosenByNIP(NIP)
    res.status(200).json({
      message: 'get dosen by NIP sukses',
      data: dosen
    })
  } catch (error) {
    next(error)
  }
}

export const getAllDosen = async (req, res, next) => {
  try {
    const dosen = await DosenDAO.findAllDosen()
    res.status(200).json({
      message: 'get all dosen sukses',
      data: {
        dosen
      }
    })
  } catch (error) {
    next(error)
  }
}

export const getDosenByJabatan = async (req, res, next) => {
  try {
    const idJabatan = req.query.id_jabatan
    const dosen = await DosenDAO.findDosenByJabatan(idJabatan)
    res.status(200).json({
      message: 'get dosen dengan id jabatan sukses',
      data: {
        dosen
      }
    })
  } catch (error) {
    next(error)
  }
}

export const postNewDosen = async (req, res, next) => {
  try {
    const { NIP, namaDosen, jabatan, email, permission, username } = req.body
    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }

    const dosen = await DosenDAO.insertOneDosen(
      NIP,
      namaDosen,
      jabatan,
      email,
      permission,
      username
    )

    res.status(200).json({
      message: 'insert dosen sukses',
      data: {
        dosen
      }
    })
  } catch (error) {
    next(error)
  }
}

export const deleteDosenByNIP = async (req, res, next) => {
  try {
    const { NIP } = req.params
    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }
    const dosen = await DosenDAO.destroyDosenByNip(NIP)
    res.status(200).json({
      message: 'delete dosen by NIP sukses',
      data: {
        dosen
      }
    })
  } catch (error) {
    next(error)
  }
}

export const getPengajarByNipDosen = async (req, res, next) => {
  try {
    const nip = req.query.nip

    const resultPengajar = await PengajarDAO.getPengajarByNipDosen(nip)
    if (resultPengajar instanceof Error) throw resultPengajar
    res.status(200).json({
      message: 'Sukses retrieve data pengajar by nip dosen',
      data: resultPengajar
    })
  } catch (error) {
    next(error)
  }
}

// get pengajar by kode matakuliah dan tahun akademik
export const getPengajarByKMTA = async (req, res, next) => {
  try {
    const tahunAkademik = req.query['tahun-akademik']
    const kodeMatkul = req.query['kode-matakuliah']
    const resultPengajar = await PengajarDAO.getPengajarByKMTA(
      kodeMatkul,
      tahunAkademik
    )
    if (resultPengajar instanceof Error) throw resultPengajar
    res.status(200).json({
      message: 'Sukses retrieve data pengajar by kode kelas dan tahun akademik',
      data: resultPengajar
    })
  } catch (error) {
    next(error)
  }
}
