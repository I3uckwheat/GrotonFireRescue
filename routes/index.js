const express = require('express');
const router = express.Router();

const routeController = require('../controllers/routeController.js');
const fireFighterController = require('../controllers/fireFighterController.js');
const pictureController = require('../controllers/pictureController');

router.get('/', routeController.home);
router.get('/admin', routeController.adminLogin);
router.get('/adminPanel', routerController.adminPanel);

router.get('/fire-fighters', fireFighterController.fireFighters);
router.get('/admin/fire-fighters', fireFighterController.editFireFighters);

router.get('/pictures', pictureController.pictures);

module.exports = router;