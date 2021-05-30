import express from 'express'
import * as MataKuliahController from '../controller/MataKuliah'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
  '/new-mata-kuliah',
  ValidatorSanitizer.newMataKuliah,
  transactionMiddleware,
  MataKuliahController.newMataKuliah
)
router.get('/all-mata-kuliah', MataKuliahController.getAllMataKuliah)
router.get('/:id', MataKuliahController.getMataKuliahById)

export default router
