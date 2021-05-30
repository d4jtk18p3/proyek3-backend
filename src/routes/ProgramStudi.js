import express from 'express'
import * as ProgramStudiController from '../controller/ProgramStudi'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
  '/new-program-studi',
  ValidatorSanitizer.newProdi,
  transactionMiddleware,
  ProgramStudiController.newProdi
)
router.get('/all-program-studi', ProgramStudiController.getAllProdi)
router.get(
  '/get-ketua-prodi/:kode_program_studi',
  ProgramStudiController.getKaProd
)
router.put(
  '/update-kaprod/:kode_program_studi',
  ValidatorSanitizer.updateProdi,
  transactionMiddleware,
  ProgramStudiController.updateKaProd
)

export default router
