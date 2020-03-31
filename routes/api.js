var express = require('express');
var router = express.Router();
const mapsCtrl = require('../controllers/maps');

/* GET maps listing. */
router.get('/maps', mapsCtrl.index);
router.post('/maps', mapsCtrl.create);
router.get('/maps/:id', mapsCtrl.show);

router.put('/maps/:id', mapsCtrl.update);
router.delete('/maps/:id', mapsCtrl.delete);

module.exports = router;