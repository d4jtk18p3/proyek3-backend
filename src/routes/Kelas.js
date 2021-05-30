import express from 'express'
import * as KelasController from '../controller/Kelas'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
  '/new-kelas',
  ValidatorSanitizer.newKelas,
  transactionMiddleware,
  KelasController.newKelas
)
router.get('/all-kelas', KelasController.getAllKelas)
router.get('/get-wali-dosen/:kode_kelas', KelasController.getWaliDosen)

export default router
