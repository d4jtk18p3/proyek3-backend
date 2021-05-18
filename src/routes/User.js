import express from 'express'
import * as UserController from '../controller/User'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'
import { transactionMiddleware } from '../middleware/transaction'

const router = express.Router()

router.post(
  '/create',
  ValidatorSanitizer.createUser,
  transactionMiddleware,
  UserController.createUser
)
router.get('/', UserController.getAllUser)
// router.delete('/delete/:username', UserController.deleteUserbyUsername)

export default router
