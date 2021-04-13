// const session = require('express-session');
// const Keycloak = require('keycloak-connect');
// import session from 'express-session';
import Keycloak from "keycloak-connect";

let keycloak;

let keycloakConfig = {
  clientId: process.env.DEV_KEYCLOAK_CLIENTID,
  bearerOnly: true,
  serverUrl: process.env.DEV_KEYCLOAK_AUTH_URL,
  realm: process.env.DEV_KEYCLOAK_REALM,
  realmPublicKey: process.env.DEV_KEYCLOAK_REALM_PUBLIC_KEY,
};

function initKeycloak() {
  if (keycloak) {
    console.log("Trying to init keycloak again");
    return keycloak;
  } else {
    console.log("Initilizing keycloak....");
    // kalo mau server manage authentication, maka harus ada session storage
    // tapi pada kasus ini, kita hanya ingin server melakukan validasi token dari FE ke Keycloak
    // jadi gaperlu ada storage untuk session (misal Redis)

    // let memoryStore = new session.MemoryStore();
    // let redisStore = new RedisStore({ client: redisClient});
    keycloak = new Keycloak({}, keycloakConfig);
    return keycloak;
  }
}

function getKeycloak() {
  if (!keycloak) {
    console.error(
      "keycloak has not been initialized. Please called init first"
    );
  }
  return keycloak;
}

export { initKeycloak, getKeycloak };
