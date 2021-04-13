const express = require('express');
const router = express.Router();
const testController = require('../controller/test');
const keycloak = require('../config/keycloak-config').getKeycloak();

router.use(keycloak.protect());

router.get('/anonymous',testController.anonymousController);

router.get('/user', testController.userController);

router.get('/admin', testController.adminController);

router.get('/all-user', testController.alluserController);

module.exports = router;