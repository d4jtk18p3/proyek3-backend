import express from 'express'
import * as MahasiswaController from '../controller/Mahasiswa'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.post('/new-mahasiswa', ValidatorSanitizer.postNewMahasiswa, MahasiswaController.postNewMahasiswa)
router.put('updatePhone-mahasiswa/:nim', ValidatorSanitizer.updateNomorHpMahasiswa, MahasiswaController.updateNomorHpMahasiswa)
export default router
