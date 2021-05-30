import express from 'express'
import * as PerkuliahanController from '../controller/Perkuliahan'
// import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.get('/', PerkuliahanController.getKuliahByIdTA)
router.get('/:kode_kelas', PerkuliahanController.getKuliahByKodeKelas)

export default router
