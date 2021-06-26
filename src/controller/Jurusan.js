import * as JurusanDAO from '../dao/Jurusan'
import { validationResult } from 'express-validator'

export const newJurusan = async (req, res, next) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }
    const kodeJurusan = req.body.kode_jurusan
    const nip = req.body.nip
    const result = await JurusanDAO.newJurusan(kodeJurusan, nip)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success insert data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getAllJurusan = async (req, res, next) => {
  try {
    const result = await JurusanDAO.getAllJurusan()
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getJurusanByKodeJurusan = async (req, res, next) => {
  try {
    const kodeJurusan = req.params.kode_jurusan
    const result = await JurusanDAO.getJurusanByKodeJurusan(kodeJurusan)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getKajurByKodeJurusan = async (req, res, next) => {
  try {
    const kodeJurusan = req.params.kode_jurusan
    const result = await JurusanDAO.getKajurByKodeJurusan(kodeJurusan)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}
