import Dosen from '../models/Dosen.js'

/*
    CATATAN :
    1.Kalo mau liat Description table di psql, pake petik dua
    Contoh : \d "Dosen"
*/

const insertOneDosen = async (NIP, nama_dosen, jabatan) => {
    try {
        const dosen = await Dosen.create({
            NIP,
            nama_dosen,
            jabatan
        })
        return dosen;   
    } catch (error) {
        console.error(error);
    }
}

var DosenDAO = {
    insertOneDosen
}

export default DosenDAO;