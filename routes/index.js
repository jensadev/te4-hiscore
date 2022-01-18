const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    return res.json('hello world');
});

module.exports = router;
