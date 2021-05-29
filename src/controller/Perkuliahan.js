import * as PerkuliahanDAO from '../dao/Perkuliahan'
// import { validationResult } from 'express-validator/check'

export const getKuliahByIdTA = async (req, res, next) => {
  try {
    const idMataKuliah = req.query['id-kuliah']
    const tahunAkademik = req.query['tahun-akademik']
    const resultPerkuliahan = await PerkuliahanDAO.getKuliahByIdTA(
      idMataKuliah,
      tahunAkademik
    )
    if (resultPerkuliahan instanceof Error) throw resultPerkuliahan
    res.status(200).json({
      message:
        'Sukses retrieve perkuliahan by id mata kuliah dan tahun akademik',
      data: resultPerkuliahan
    })
  } catch (error) {
    next(error)
  }
}
