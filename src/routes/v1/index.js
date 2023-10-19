const express = require('express')
const {infoController} = require('../../controllers')
const AirplaneRoutes = require('./airplane-routes')
const router = express.Router();
 router.use('/airplanes', AirplaneRoutes);
router.get('/info',infoController.info)
module.exports = router;