import express from 'express'
import DosenController from '../controller/Dosen'

const router = express.Router();

router.post('/new-dosen', DosenController.postNewDosen)

export default router