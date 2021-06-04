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

router.delete(
  '/:username',
  ValidatorSanitizer.deleteUserbyUsername,
  transactionMiddleware,
  UserController.deleteUserbyUsername
)

router.put(
  '/update-account',
  ValidatorSanitizer.updateAccount,
  transactionMiddleware,
  UserController.updateAccount
)

router.post(
  '/forget-password',
  ValidatorSanitizer.resetPasswordRequest,
  UserController.resetPasswordRequest
)

export default router
