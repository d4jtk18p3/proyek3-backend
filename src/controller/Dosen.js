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
    // console.log("BODY YANG DIKIRM ",NIP, nama_dosen, jabatan);
    const dosen = await DosenDAO.insertOneDosen(NIP, namaDosen, jabatan)
    res.status(200).json({
      message: 'insert dosen sukses',
      data: dosen
    })
  } catch (error) {
    next(error)
  }
}

const DosenController = {
  postNewDosen
}

export default DosenController
