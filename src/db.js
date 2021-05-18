import Sequelize from 'sequelize'
import { createNamespace } from 'cls-hooked'

export const namespace = createNamespace('db')
Sequelize.useCLS(namespace)

const sequelize = new Sequelize(
  `postgresql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DATABASE}`,
  { define: { freezeTableName: true } }
)

export default sequelize
