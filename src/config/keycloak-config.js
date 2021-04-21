// import session from 'express-session';
import Keycloak from 'keycloak-connect'

let keycloak

const keycloakConfig = {
  clientId: process.env.DEV_KEYCLOAK_CLIENTID,
  bearerOnly: true,
  serverUrl: process.env.DEV_KEYCLOAK_AUTH_URL,
  realm: process.env.DEV_KEYCLOAK_REALM,
  realmPublicKey:
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnEF7iaMslkjykYp3YviJmJaygc7tfTeqRJLbdHitJtGLNOsoDxJxZ10J7bAqlXvYoLm03tGmgtR8IOFGjvAWMGxlQrJ60xi3ZAs6lcXFmOB9+ik2CU5vhwFouVnG+bvkPgIs+qbFcxbBEgk8LJGUsLfGgNh104FO8OfqusG6MHtWKuddooEIGu1zxe0ZKGORtdP/VNxF5YG+5PAJzFH1uHsUkItCrAvCkkLzN2rjuT5Q1MhpaaIz4n2DCoaj7uuPhS7erXcOqGYR/6dEOOYPoK6Vw0M1tB2vQeBqjLbHayzdVgksZlDLlEWiluFwgoLkkXy2AuDSInRcTQtqXH1rtQIDAQAB'
}

function initKeycloak () {
  if (keycloak) {
    console.log('Trying to init keycloak again')
    return keycloak
  } else {
    console.log('Initilizing keycloak....')
    // kalo mau server manage authentication, maka harus ada session storage
    // tapi pada kasus ini, kita hanya ingin server melakukan validasi token dari FE ke Keycloak
    // jadi gaperlu ada storage untuk session (misal Redis)

    // let memoryStore = new session.MemoryStore();
    // let redisStore = new RedisStore({ client: redisClient});
    keycloak = new Keycloak({}, keycloakConfig)
    return keycloak
  }
}

function getKeycloak () {
  if (!keycloak) {
    console.error('keycloak has not been initialized. Please called init first')
  }
  return keycloak
}

export { initKeycloak, getKeycloak }
