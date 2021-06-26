import * as JabatanDAO from '../dao/Jabatan'
import { validationResult } from 'express-validator'

export const newJabatan = async (req, res, next) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }
    const { id } = req.body
    const result = await JabatanDAO.newJabatan(id)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success insert data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getJabatanById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await JabatanDAO.getJabatanById(id)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}
