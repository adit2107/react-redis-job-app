const redis = require('../helper/redishelper');
const express = require('express');
const router = express.Router();

router.use('/profile', require('./users/userController'));

router.get('/jobs', async (req, res) => {
    const jobs = await redis.getAsync("githubremotejobs");
    res.send(jobs);
});

module.exports = router;
