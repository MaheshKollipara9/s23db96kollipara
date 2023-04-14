var express = require('express');
const parrot_controlers= require('../controllers/parrot');
var router = express.Router();

/* GET parrots */
router.get('/', parrot_controlers.parrot_view_all_Page );
module.exports = router;