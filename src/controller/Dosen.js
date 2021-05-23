import * as DosenDAO from '../dao/Dosen'
import { validationResult } from 'express-validator/check'

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
      data: {
        dosen
      }
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
    const jabatan = req.query.jabatan
    const dosen = await DosenDAO.findDosenByJabatan(jabatan)
    res.status(200).json({
      message: 'get dosen yang menjadi ' + jabatan + ' sukses',
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

    const dosen = await DosenDAO.insertOneDosen(NIP, namaDosen, jabatan, email, permission, username)

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
