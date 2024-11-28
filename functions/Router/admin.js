const express = require('express');
const { matchingpageg,page1,genderpage ,matchingpage,matchingpagef, adminpage , checkpage, page2} = require('../controllers/admin');
const router = express.Router(); 

router.get('/matching',matchingpage)
router.get('/matchingf',matchingpagef)
router.get('/matchingg',matchingpageg)
router.get('/gender',genderpage)
router.get('/page1',page1)
router.get('/page2',page2)
router.get('/:uid',adminpage)
router.get('/check/:uid',checkpage)
module.exports = router