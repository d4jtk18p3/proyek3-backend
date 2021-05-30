import express from 'express'
import * as JabatanController from '../controller/Jabatan'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
  '/new-jabatan',
  ValidatorSanitizer.newJabatan,
  transactionMiddleware,
  JabatanController.newJabatan
)

router.get('/:id', JabatanController.getJabatanById)

export default router
