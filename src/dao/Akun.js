// import Akun from '../models/Akun'
// import db from '../db'

// export const insertOneAkun = async (
//   username,
//   password,
//   tipeAkun,
//   idKeycloak
// ) => {
//   try {
//     const akun = await Akun.create({
//       username,
//       password,
//       tipe_akun: tipeAkun,
//       id_keycloak: idKeycloak
//     })
//     return akun
//   } catch (error) {
//     console.error(error)
//   }
// }

// export const findAkunByUsername = async (username) => {
//   try {
//     const akun = await Akun.findAll({
//       where: {
//         username
//       }
//     })
//     return akun[0]
//   } catch (error) {
//     console.error(error)
//   }
// }

// export const deleteAkunByUsername = async (username) => {
//   try {
//     const akun = await Akun.destroy({
//       where: {
//         username
//       }
//     })
//     return akun
//   } catch (error) {
//     console.error(error)
//   }
// }

// export const getAllAkun = async (role, offset, perPage, key) => {
//   try {
//     const lowerKey = '%' + key.toLowerCase() + '%'
//     const result = await db.query(
//       'SELECT * FROM public."Akun" LEFT JOIN keycloak."user_entity" ON public."Akun".id_keycloak = keycloak."user_entity".id WHERE public."Akun".tipe_akun = ? AND (LOWER(public."Akun".username) LIKE ? OR LOWER(keycloak."user_entity".email) LIKE ?) ORDER BY public."Akun"."createdAt" ASC LIMIT ? OFFSET ?',
//       {
//         replacements: [role, lowerKey, lowerKey, perPage, offset],
//         type: db.QueryTypes.SELECT
//       }
//     )

//     return result
//   } catch (error) {
//     console.error(error)
//   }
// }
