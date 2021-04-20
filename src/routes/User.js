import express from 'express'
import * as UserController from '../controller/User'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.post(
  '/new-user',
  ValidatorSanitizer.createUser,
  UserController.createUser
)

export default router
