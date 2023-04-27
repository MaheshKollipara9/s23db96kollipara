var express = require('express');
const parrot_controlers= require('../controllers/parrot');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET parrots */
router.get('/', parrot_controlers.parrot_view_all_Page );
/* GET detail parrot page */
router.get('/detail',secured, parrot_controlers.parrot_view_one_Page);

/* GET create parrot page */
router.get('/create',secured, parrot_controlers.parrot_create_Page);
module.exports = router;

/* GET create update page */
router.get('/update',secured, parrot_controlers.parrot_update_Page);

/* GET delete parrot page */
router.get('/delete',secured, parrot_controlers.parrot_delete_Page);
module.exports = router;