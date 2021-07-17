import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

import { init as keycloakInit } from './keycloak'

// import keycloak from './middleware/keycloak'
import dosenRouter from './routes/Dosen'
import mahasiswaRouter from './routes/Mahasiswa'
import userRouter from './routes/User'
import perkuliahanRouter from './routes/Perkuliahan'
import MataKuliahRouter from './routes/MataKuliah'
import ProgramStudiRouter from './routes/ProgramStudi'
import KelasRouter from './routes/Kelas'
import StudiRouter from './routes/Studi'
import JabatanRouter from './routes/Jabatan'
import JurusanRouter from './routes/Jurusan'

const app = express()

keycloakInit()

app.use(cors())
// Non aktifkan dulu keycloak agar tidak ada validasi token
// app.use(keycloak.middleware())
// app.use(keycloak.protect())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/dosen', dosenRouter)
app.use('/mahasiswa', mahasiswaRouter)
app.use('/user', userRouter)
app.use('/kuliah', perkuliahanRouter)
app.use('/mata-kuliah', MataKuliahRouter)
app.use('/program-studi', ProgramStudiRouter)
app.use('/kelas', KelasRouter)
app.use('/studi', StudiRouter)
app.use('/jabatan', JabatanRouter)
app.use('/jurusan', JurusanRouter)

// error handling
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const cause = error.cause || 'Internal Server Error'
  res.status(status).json({
    message: message,
    error: status,
    cause: cause
  })
})

export default app
