import { createRequire } from 'module'
import https from 'https'

const require = createRequire(import.meta.url)

const KcAdminClient = require('keycloak-admin').default

var adminClient

var kcAdminClient = new KcAdminClient({
  baseUrl: 'https://keycloak.ca9db134.nip.io/auth',
  realmName: 'master',
  requestConfig: {
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  }
})

export async function adminAuth() {
  await kcAdminClient.auth({
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli'
  })
  adminClient = kcAdminClient
}

export function getAdminClient() {
  return adminClient
}

// module.exports = { adminAuth, getAdminClient }
