const router = require('express').Router();
const {
    codeChefController,
    codeForcesController,
    leetCodeController,
    hackerRankController,
    hackerEarthController,
    atCoderController,
    spojController } = require('../controllers/platform.controllers');


router.get('/codechef/:userHandle', codeChefController);
router.get('/codeforces/:userHandle', codeForcesController);
router.get('/leetcode/:userHandle', leetCodeController);
router.get('/hackerrank/:userHandle', hackerRankController);
router.get('/hackerearth/:userHandle', hackerEarthController);
router.get('/atcoder/:userHandle', atCoderController);
router.get('/spoj/:userHandle', spojController);

module.exports = router;