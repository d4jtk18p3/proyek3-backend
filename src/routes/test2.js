import express from 'express'
import {initKeycloak} from '../config/keycloak-config'
import * as testController from '../controller/test2'

// Routes checklist
// init keycloak
// pasang middleware

const router = express.Router();
const keycloak = initKeycloak();

router.use(keycloak.middleware());
router.use(keycloak.protect());

router.get('/anonymous2', testController.anonymousController2);

router.get('/user2', testController.userController2);

router.get('/admin2', keycloak.protect('admin'), testController.adminController2);

router.get('/all-user2', testController.alluserController2);


export default router;