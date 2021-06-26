import { body, param } from 'express-validator'
import * as DosenDAO from '../dao/Dosen'
import * as MahasiswaDAO from '../dao/Mahasiswa'

// CATATAN : File ini berisi middleware untuk memvalidasi dan sanitasi inputan yang dikirim oleh user

/* Validator dan Sanitizer untuk Dosen */

export const postNewDosen = [
  body('NIP', 'NIP wajib diisi').exists().bail(),
  body('NIP').custom(async (value) => {
    return DosenDAO.findDosenByNIP(value).then((dosen) => {
      if (dosen) {
        return Promise.reject(new Error('NIP sudah terdaftar'))
      }
    })
  }),
  body('namaDosen', 'Nama dosen wajib diisi'),
  body('email', 'format email tidak valid').isEmail(),
  body('permission', 'permission wajib diisi').exists(),
  body('jabatan', 'format jabatan tidak valid atau jabatan tidak ada').isIn([
    'wali-kelas',
    'kajur',
    'kaprodi',
    'dosen-pengampu'
  ])
]

/* Validator dan Sanitizer untuk Mahasiswa */

export const postNewMahasiswa = [
  body('NIM', 'NIM wajib diisi').exists().bail(),
  body('NIM').custom((value) => {
    return MahasiswaDAO.findMahasiswaByNIM(value).then((mhs) => {
      if (mhs) {
        return Promise.reject(new Error('NIM sudah terdaftar'))
      }
    })
  }),
  body('namaMahasiswa', 'Nama Mahasiswa wajib diisi').exists(),
  body('angkatan', 'Angkatan wajib diisi').exists(),
  body('tingkat', 'Tingkat wajib diisi').exists(),
  body('email', 'Format email tidak valid').isEmail(),
  body('status', 'Status wajib diisi').exists()
  // body('nomorHp', 'Nomor Hp tidak valid').isLength({ min: 11 })
]

export const updateNomorHpMahasiswa = [
  body('nomorHP', 'Nomor HP wajib diisi').exists()
  // body('nomorHP', 'Nomor HP harus maksimal 13 angka').isLength({ max: 13}),
  // body('nomorHP', 'Nomor HP harus numerik').isNumeric(),
]

export const createUser = [
  body('noInduk', 'No induk wajib diisi').exists().bail(),
  body('jenisNoInduk', 'Jenis no iduk wajib diisi').exists(),
  body('nama', 'Nama wajib diisi').exists(),
  body('email', 'Format email tidak valid').isEmail(),
  body('role', 'Role wajib diisi').exists()
]

export const deleteDosenByNIP = [
  param('NIP').custom(async (value) => {
    return DosenDAO.findDosenByNIP(value).then((dosen) => {
      if (dosen) {
        return Promise.reject(
          new Error('Dosen dengan NIP tersebut tidak ditemukan')
        )
      }
    })
  })
]

export const deleteUserbyUsername = [
  param('username', 'Username wajib diisi').exists()
]

export const updateAccount = [
  body('username', 'Username tidak boleh kosong').exists(),
  body('newEmail', 'Format email tidak valid').isEmail(),
  body('newStatus', 'Status wajib diisi').isBoolean()
]

export const newMataKuliah = [
  body('id').exists().isLength({
    min: 1,
    max: 8
  }),
  body('semester').exists().isInt(),
  body('nama_mata_kuliah').exists().isLength({
    min: 1,
    max: 50
  }),
  body('sks_teori').isInt(),
  body('sks_praktek').isInt(),
  body('kode_program_studi').exists().isLength({
    min: 1,
    max: 15
  })
]

export const newProdi = [
  body('kode_program_studi').exists().isLength({
    min: 1,
    max: 15
  }),
  body('nip').exists().isLength({
    min: 1,
    max: 30
  }),
  body('kode_jurusan').exists().isLength({
    min: 1,
    max: 255
  })
]

export const updateProdi = [
  body('kode_program_studi').exists().isLength({
    min: 1,
    max: 15
  }),
  body('nip').exists().isLength({
    min: 1,
    max: 30
  })
]

export const newKelas = [
  body('kode_kelas').exists().isInt(),
  body('tahun').exists().isInt(),
  body('kode_program_studi').exists().isLength({
    min: 1,
    max: 15
  }),
  body('nip').exists().isLength({
    min: 1,
    max: 30
  })
]

export const newJabatan = [
  body('id').exists().isLength({
    min: 1,
    max: 255
  })
]

export const newJurusan = [
  body('kode_jurusan').exists().isLength({
    min: 1,
    max: 255
  }),
  body('nip').exists().isLength({
    min: 1,
    max: 30
  })
]

export const resetPasswordRequest = [body('email').exists().isEmail()]

export const resetPassword = [
  body(
    'token',
    'Gagal reset password, silahkan akses halaman forget password lagi'
  ).exists(),
  body('newPassword')
    .trim()
    .exists()
    .withMessage('Anda harus menyertakan password baru')
    .isLength({ min: 8 })
    .withMessage('Password minimal 8 karakter')
    .matches(/[A-Z]/)
    .withMessage('Password harus memiliki huruf kapital')
    .matches(/[a-z]/)
    .withMessage('Password harus memiliki huruf kecil')
    .matches(/[0-9]/)
    .withMessage('Password harus memiliki angka')
    .matches(/[!@#$%^&*]/)
    .withMessage(
      'Password harus memiliki setidaknya satu karakter spesial(!@#$%^&*)'
    ),
  body('hint').trim().exists().withMessage('Hint tidak boleh kosong')
]
