import * as ProgramStudiDAO from '../dao/ProgramStudi'
import { validationResult } from 'express-validator'

export const newProdi = async (req, res, next) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }

    const kodeProdi = req.body.kode_program_studi
    const nip = req.body.nip
    const kodeJurusan = req.body.kode_jurusan

    const result = await ProgramStudiDAO.newProdi(kodeProdi, nip, kodeJurusan)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success insert data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getAllProdi = async (req, res, next) => {
  try {
    const result = await ProgramStudiDAO.getAllProdi()
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getKaProd = async (req, res, next) => {
  try {
    const kodeProdi = req.params.kode_program_studi
    const result = await ProgramStudiDAO.getKaProd(kodeProdi)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const updateKaProd = async (req, res, next) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }
    const { nip } = req.body
    const kodeProdi = req.params.kode_program_studi
    const result = await ProgramStudiDAO.updateKaProd(kodeProdi, nip)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success update data',
      data: result
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
