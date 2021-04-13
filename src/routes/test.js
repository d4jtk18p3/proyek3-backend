import express from 'express'
import {initKeycloak} from '../config/keycloak-config'
import * as testController from '../controller/test'

const router = express.Router();
const keycloak = initKeycloak();

router.use(keycloak.middleware());
router.use(keycloak.protect());

router.get('/anonymous', testController.anonymousController);

router.get('/user', testController.userController);

router.get('/admin', keycloak.protect('admin'), testController.adminController);

router.get('/all-user', testController.alluserController);


export default router;