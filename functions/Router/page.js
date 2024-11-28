const express = require('express');
const router = express.Router(); 
const {gmatching_finish,groupmatchingInfo,matchingInfopage,viewprofilepage,logoutpage,homepage,loginpage,signuppage,intropage,myprofilepage,matching,matchingresultL,matchingresultF,matchingresultG,myprofilesetting,verify, lovematching, friendmatching,groupmatching,welcomepage, matching_finish } = require('../controllers/page');


router.get('/',homepage)
router.get('/intro',intropage)
router.get('/login',loginpage)
router.get('/signup',signuppage)
router.get('/logout',logoutpage)
router.get('/welcome',welcomepage)
router.get('/myprofile',myprofilepage)
router.get('/viewprofile',viewprofilepage)
router.get('/matching',matching)
router.get('/matchingresult-love',matchingresultL)
router.get('/matchingresult-friend',matchingresultF)
router.get('/matchingresult-group',matchingresultG)
router.get('/matchingInfo',matchingInfopage)
router.get('/myprofilesetting',myprofilesetting)
// router.get('/lovematching',lovematching)
// router.get('/friendmatching',friendmatching)
router.get('/groupmatching',groupmatching)
router.get('/groupmatchingInfo',groupmatchingInfo)
// router.get('/lmatching-finish',lmatching_finish)
// router.get('/fmatching-finish',fmatching_finish)
router.get('/gmatching-finish',gmatching_finish)
router.get('/verify',verify)

module.exports = router