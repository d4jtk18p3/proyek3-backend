import express from 'express'
import * as StudiController from '../controller/Studi'

const router = express.Router()

router.get('/:id', StudiController.getStudiByID)

export default router
