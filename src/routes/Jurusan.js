import express from 'express'
import * as JurusanController from '../controller/Jurusan'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
  '/new-jurusan',
  ValidatorSanitizer.newJurusan,
  transactionMiddleware,
  JurusanController.newJurusan
)
router.get('/all-jurusan', JurusanController.getAllJurusan)
router.get('/:kode_jurusan', JurusanController.getJurusanByKodeJurusan)
router.get('/get-kajur/:kode_jurusan', JurusanController.getKajurByKodeJurusan)

export default router
