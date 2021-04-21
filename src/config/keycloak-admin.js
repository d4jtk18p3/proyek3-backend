import { createRequire } from 'module'
import https from 'https'

const require = createRequire(import.meta.url)

const KcAdminClient = require('keycloak-admin').default

var kcAdminClient = new KcAdminClient({
  baseUrl: 'https://keycloak.ca9db134.nip.io/auth',
  realmName: 'master',
  requestConfig: {
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  }
})

export async function adminAuth(client) {
  await client.auth({
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli'
  })
}

export function getAdminClient() {
  return kcAdminClient
}

// module.exports = { adminAuth, getAdminClient }
