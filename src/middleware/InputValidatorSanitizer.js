import { body } from 'express-validator'
import * as DosenDAO from '../dao/Dosen'
import * as MahasiswaDAO from '../dao/Mahasiswa'

// CATATAN : File ini berisi middleware untuk memvalidasi dan sanitasi inputan yang dikirim oleh user

/* Validator dan Sanitizer untuk Dosen */

export const postNewDosen = [
  body('NIP', 'NIP wajib diisi').exists().bail(),
  body('NIP').custom(value => {
    return DosenDAO.findDosenByNIP(value).then(dosen => {
      if(dosen){
        return Promise.reject('NIP sudah terdaftar')
      }
    })
  }),
  body('namaDosen', 'Nama dosen wajib diisi').exists(),
  body('jabatan', 'Jabatan wajib diisi').exists()
]

/* Validator dan Sanitizer untuk Mahasiswa */

export const postNewMahasiswa = [
  body('NIM', 'NIM wajib diisi').exists().bail(),
  body('NIM').custom(value => {
    return MahasiswaDAO.findMahasiswaByNIM(value).then(mhs => {
      if(mhs){
        return Promise.reject('NIM sudah terdaftar')
      }
    })
  }),
  body('namaMahasiswa', 'Nama Mahasiswa wajib diisi').exists(),
  body('angkatan', 'Angkatan wajib diisi').exists(),
  body('tingkat', 'Tingkat wajib diisi').exists(),
  body('email', 'Format email tidak valid').isEmail(),
  body('status', 'Status wajib diisi').exists(),
  body('nomorHp', 'Nomor Hp tidak valid').exists().isLength({ min: 11}),
  body('urlFoto').exists()
]