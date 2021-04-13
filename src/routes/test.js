// const express = require('express');
// const router = express.Router();
// const testController = require('../controller/test');
// const keycloak = require('../config/keycloak-config').getKeycloak();

import express from 'express'
import Keycloak from '../config/keycloak-config'
import testController from '../controller/test'

const router = express.Router();
const keycloak = Keycloak.getKeycloak();

router.use(keycloak.protect());

router.get('/anonymous',testController.anonymousController);

router.get('/user', testController.userController);

router.get('/admin', testController.adminController);

router.get('/all-user', testController.alluserController);

module.exports = router;