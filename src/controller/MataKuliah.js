import * as MataKuliahDAO from '../dao/MataKuliah'
import { validationResult } from 'express-validator'

export const newMataKuliah = async (req, res, next) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }

    const id = req.body.id
    const semester = req.body.semester
    const namaMatkul = req.body.nama_mata_kuliah
    const sksTeori = req.body.sks_teori
    const sksPraktek = req.body.sks_praktek
    const kodeProdi = req.body.kode_program_studi

    const result = await MataKuliahDAO.newMataKuliah(
      id,
      semester,
      namaMatkul,
      sksTeori,
      sksPraktek,
      kodeProdi
    )
    if (result instanceof Error) throw result
    res.status(200).json({
      messsage: 'Success insert data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getAllMataKuliah = async (req, res, next) => {
  try {
    const result = await MataKuliahDAO.getAllMataKuliah()
    if (result instanceof Error) throw result
    res.status(200).json({
      messsage: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getMataKuliahById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await MataKuliahDAO.getMataKuliahById(id)
    if (result instanceof Error) throw result
    res.status(200).json({
      messsage: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    next(error)
  }
}
