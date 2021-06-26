import * as KelasDAO from '../dao/Kelas'
import { validationResult } from 'express-validator'

export const newKelas = async (req, res, next) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }
    const kodeKelas = req.body.kode_kelas
    const kodeProdi = req.body.kode_program_studi
    const nip = req.body.nip
    const tahun = req.body.tahun

    const result = await KelasDAO.newKelas(kodeKelas, kodeProdi, nip, tahun)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success insert data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getAllKelas = async (req, res, next) => {
  try {
    const result = await KelasDAO.getAllKelas()
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getWaliDosen = async (req, res, next) => {
  try {
    const kodeKelas = req.params.kode_kelas
    const result = await KelasDAO.getWaliDosen(kodeKelas)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}
