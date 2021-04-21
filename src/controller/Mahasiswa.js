import * as MahasiswaDAO from '../dao/Mahasiswa'
import { validationResult } from 'express-validator/check'

export const postNewMahasiswa = async (req, res, next) => {
  try {
    const {
      NIM,
      namaMahasiswa,
      angkatan,
      tingkat,
      email,
      nomorHp,
      urlFoto,
      status,
      username
    } = req.body
    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }

    const mahasiswa = await MahasiswaDAO.insertOneMahasiswa(
      NIM,
      namaMahasiswa,
      parseInt(angkatan),
      parseInt(tingkat),
      email,
      nomorHp,
      urlFoto,
      status,
      username
    )

    if (typeof mahasiswa === 'undefined') {
      error.status = 500
      error.message = 'Insert Mahasiswa gagal'
      throw error
    }

    res.status(200).json({
      message: 'insert mahasiswa sukses',
      data: {
        mahasiswa
      }
    })
  } catch (error) {
    next(error)
  }
}

export const updateNomorHpMahasiswa = async (req,res,next) =>{
  const nomorHpUpdate = req.body.nomorHp
  const mahasiswa = await MahasiswaDAO.updateNomorHpMahasiswa(req.paramas.nim, nomorHpUpdate)

  if (typeof mahasiswa === 'undefined') {
    error.status = 500
    error.message = 'Update Nomor HP Mahasiswa gagal'
    throw error
  }
  res.status(200).json({
    message: 'Update Nomor HP Mahasiswa berhasil',
    data: {
      mahasiswa
    }
  })
  try {
    
  } catch (error) {
    
  }
}
