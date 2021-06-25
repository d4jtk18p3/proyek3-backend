import keycloakAdmin from 'keycloak-admin'
import openidClient from 'openid-client'

const AdminClient = keycloakAdmin.default

const ADMIN_CLIENT_ID = process.env.KEYCLOAK_ADMIN_CLIENT_ID
const ADMIN_USERNAME = process.env.KEYCLOAK_ADMIN_USERNAME
const ADMIN_PASSWORD = process.env.KEYCLOAK_ADMIN_PASSWORD
const BASE_URL = process.env.KEYCLOAK_BASE_URL
// const CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID
const REALM_NAME = process.env.KEYCLOAK_REALMN_NAME
const REFRESH_TIME = 30 * 1000
const RETRY_TIME = 10 * 1000

// let keycloak

const init = (store) => {
//  keycloak = new Keycloak({
//    store: store
//  }, {
//    clientId: CLIENT_ID,
//    serverUrl: BASE_URL,
//    realm: REALM_NAME,
//  })
}

const adminClient = new AdminClient({
  baseUrl: BASE_URL,
  realmName: REALM_NAME
})

const initAdminClient = async (issuer, client, tokenSet) => {
  try {
    var timeoutDuration = RETRY_TIME

    console.log('Authenticating keycloak admin client')

    issuer = issuer || await openidClient.Issuer.discover(
      `${BASE_URL}/realms/master`
    )

    client = client || new issuer.Client({
      client_id: ADMIN_CLIENT_ID,
      token_endpoint_auth_method: 'none'
    })

    if (tokenSet) {
      timeoutDuration = REFRESH_TIME
      tokenSet = await client.refresh(tokenSet.refresh_token)
    } else {
      tokenSet = await client.grant({
        grant_type: 'password',
        username: ADMIN_USERNAME,
        password: ADMIN_PASSWORD
      })
    }

    adminClient.setAccessToken(tokenSet.access_token)

    console.log('Keycloak admin client authenticated')
  } catch (err) {
    console.log('Unable to authenticate keycloak admin client')
    console.error(err)
    console.log(`Retrying in ${timeoutDuration / 1000} seconds`)
  } finally {
    setTimeout(() => {
      initAdminClient(issuer, client, tokenSet)
    }, timeoutDuration)
  }
}

initAdminClient()

export { init, adminClient }
