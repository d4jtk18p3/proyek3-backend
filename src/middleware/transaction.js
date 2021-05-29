import sequelize, { namespace } from '@proyek3/postgres-database/db'
import onFinished from 'on-finished'

export const transactionMiddleware = async (req, res, next) => {
  namespace.bindEmitter(req)
  namespace.bindEmitter(res)
  namespace.bind(next)
  namespace.run(async () => {
    const transaction = await sequelize.transaction()
    namespace.set('transaction', transaction)
    onFinished(res, () => {
      if (res.statusCode >= 400) {
        transaction.rollback()
      } else {
        transaction.commit()
      }
    })
    next()
  })
}
