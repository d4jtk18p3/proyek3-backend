import express from 'express'
import {initKeycloak} from './keycloak-config';

const router = express.Router();
const app = express();
const keycloak = initKeycloak();

app.use(keycloak.middleware());


router.get('/user', keycloak.protect('user'), function(req,res){
    res.send("Testing User");
});
router.get('/admin', keycloak.protect('admin'), function(req,res){
    res.send("Testing admin");
});


export default app
