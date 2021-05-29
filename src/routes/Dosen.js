import express from 'express'
import * as DosenController from '../controller/Dosen'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.get('/get-one/:NIP', DosenController.getDosenByNIP)
router.get('/all-dosen', DosenController.getAllDosen)
router.get('', DosenController.getDosenByJabatan)
router.post(
  '/new-dosen',
  ValidatorSanitizer.postNewDosen,
  DosenController.postNewDosen
)
router.delete('/delete/:NIP', DosenController.deleteDosenByNIP)
router.get('/pengajar-nip', DosenController.getPengajarByNipDosen)
router.get('/pengajar-kmta', DosenController.getPengajarByKMTA)

export default router
