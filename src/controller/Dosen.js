import DosenDAO from '../dao/Dosen'

/*
    Catatan:
    1.Jangan lupa gunakan format yang telah disepakati saat mengirimkan
      respon ke FE
    2.Kalo bikin error handling :
    custom error example jika ingin throw error
    const error = new Error("message nya apa");
    error.statusCode = 4xx;
    error.cause = `tulis cause nya apa`;
    throw error;
*/

const postNewDosen = async (req, res, next) => {
  try {
    const { NIP, namaDosen, jabatan } = req.body
    const error = new Error()

    // Validasi data yang dikirim
    if (!NIP || !namaDosen || !jabatan) {
      error.message = 'Bad Request - Anda harus mengirimkan NIP, namaDosen, dan jabatan'
      error.statusCode = 400
      error.cause = 'Client tidak mengirimkan seluruh data yang dibutuhkan'
      throw error
    }

    const dosen = await DosenDAO.insertOneDosen(NIP, namaDosen, jabatan)

    if (typeof dosen === 'undefined') {
      error.message = 'NIP dosen sudah terdaftar'
      error.statusCode = 400
      error.cause = 'Client mengirimkan NIP yang sudah terdaftar'
      throw error
    }

    res.status(200).json({
      message: 'insert dosen sukses',
      data: {
        dosen
      }
    })
  } catch (error) {
    next(error)
  }
}

const DosenController = {
  postNewDosen
}

export default DosenController
