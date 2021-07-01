import User from '@proyek3/postgres-database/models/User'

export const getFCMUser = async (userId) => {
  try {
    const result = await User.findOne({
      where: {
        id: userId
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateFCMUserEmail = async (idUser, email) => {
  try {
    const result = await User.update({
      email: email
    },
    {
      where: {
        id: idUser
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
