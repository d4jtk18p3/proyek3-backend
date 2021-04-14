import session from 'express-session';
import KeycloakConnect from 'keycloak-connect';


let kc;
// keycloak config server dari naufal fadhil
var keycloakConfig = {
    "realm": `${process.env.KEYCLOAK_REALM}`,
    "auth-server-url": `${process.env.KEYCLOAK_SERVERURL}`,
    "resource": "node-microservice",
    "realmPublicKey": `${process.env.KEYCLOAK_REALM_PUBLICKEY}`,
    "bearer-only": true
};

function initKeycloak() {
    if (kc){
        console.log("Returning existing keycloak instance");
        return kc;
    }
    else{
        console.log("Initializing Keycloak...");
        kc = new KeycloakConnect({},keycloakConfig);
        // console.log("KC initialize: ",kc);
        return kc;
    }
};

export {
    initKeycloak,
};