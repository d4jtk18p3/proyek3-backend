import express from 'express'
import * as PerkuliahanController from '../controller/Perkuliahan'
// import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.get('/', PerkuliahanController.getKuliahByIdTA)

export default router
