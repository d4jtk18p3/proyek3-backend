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

export const deleteMahasiswabyId = async (req,res,next) => {
  try {
    const idMahasiswa = req.params.id
    const result = await MahasiswaDAO.deleteMahasiswabyId(idMahasiswa)
    if(result == 1){
      res.status(200).json({
        message: 'Delete mahasiswa berhasil, id: ' + idMahasiswa,
        data: {
        }
      })
    }
    else{
      error.status = 500
      error.message = 'Delete Mahasiswa gagal, id: ' + idMahasiswa
      throw error
    }
  } catch (error) {
    next(error)
  }
}