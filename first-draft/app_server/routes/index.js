var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/cntrlMain");
var modelMain = require("../models/modelMain");

// router.get('/', ctrlMain.get_register);
router.get('/', ctrlMain.get_homePage);
router.get('/admin', ctrlMain.check_admin,ctrlMain.get_admin);
router.post('/register', ctrlMain.post_register);
router.post('/login', ctrlMain.post_login);
router.get('/logout', ctrlMain.check_logged_In, ctrlMain.get_logout);
router.get('/home', ctrlMain.check_logged_In, ctrlMain.get_homePage);
router.get('/news', ctrlMain.check_logged_In, ctrlMain.get_news);
router.get('/info', ctrlMain.check_logged_In, ctrlMain.get_info);
router.get('/baby', ctrlMain.check_logged_In, ctrlMain.get_baby);
router.get('/baby1', ctrlMain.check_logged_In, ctrlMain.get_baby1);
router.get('/baby2', ctrlMain.check_logged_In, ctrlMain.get_baby2);
router.get('/baby3', ctrlMain.check_logged_In, ctrlMain.get_baby3);
router.get('/feed', ctrlMain.check_logged_In, ctrlMain.get_feed);
router.get('/feed1', ctrlMain.check_logged_In, ctrlMain.get_feed1);
router.get('/feed2', ctrlMain.check_logged_In, ctrlMain.get_feed2);
router.get('/overview', ctrlMain.check_logged_In, ctrlMain.get_overview);
router.get('/joinus', ctrlMain.check_logged_In, ctrlMain.get_joinus);
router.get('/party', ctrlMain.check_logged_In, ctrlMain.get_party);
router.get('/about', ctrlMain.check_logged_In, ctrlMain.get_about);
router.get('/member', ctrlMain.check_logged_In, ctrlMain.get_member);

module.exports = router;
