import express from 'express'
import * as DosenController from '../controller/Dosen'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.get('/:NIP', DosenController.getDosenByNIP)
router.post('/new-dosen', ValidatorSanitizer.postNewDosen, DosenController.postNewDosen)

export default router
