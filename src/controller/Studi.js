import * as StudiDAO from '../dao/Studi'

export const getStudiByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await StudiDAO.getStudiByID(id)
    if (result instanceof Error) throw result
    res.status(200).json({
      message: 'Success retrieve data',
      data: result
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
