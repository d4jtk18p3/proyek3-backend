import express from 'express'
import { initKeycloak, getKeycloak } from '../config/keycloak-config'
import {anonymousController} from '../controller/test'

const router = express.Router();
const keycloak = initKeycloak();

router.use(keycloak.middleware());
router.use(keycloak.protect());

router.get('/anonymous', anonymousController);


export default router;