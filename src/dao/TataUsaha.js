// import TataUsaha from '../models/TataUsaha'

// export const insertOneTataUsaha = async (
//   nip,
//   nama,
//   email,
//   permissions,
//   username
// ) => {
//   try {
//     const tataUsaha = await TataUsaha.create({
//       nip,
//       nama,
//       email,
//       permissions,
//       username
//     })
//     return tataUsaha
//   } catch (error) {
//     console.error(error)
//   }
// }

// export const findTataUsahaByNIP = async (nip) => {
//   try {
//     const tataUsaha = await TataUsaha.findAll({
//       where: {
//         nip
//       }
//     })
//     return tataUsaha[0]
//   } catch (error) {
//     console.error(error)
//   }
// }
