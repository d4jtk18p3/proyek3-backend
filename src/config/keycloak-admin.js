import { createRequire } from 'module'
import https from 'https'

const require = createRequire(import.meta.url)

const KcAdminClient = require('keycloak-admin').default

const kcAdminClient = new KcAdminClient({
  baseUrl: 'https://keycloak.ca9db134.nip.io/auth',
  realmName: 'master',
  requestConfig: {
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  }
})

export const adminAuth = async (client) => {
  await client.auth({
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli'
  })
}

export const getAdminClient = () => {
  return kcAdminClient
}
