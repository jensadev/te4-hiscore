const express = require('express');
const router = express.Router();
const { Game } = require('../../../models/');

router.get('/', async (req, res) => {
    const games = await Game.findAll();
    res.json({games});
});

module.exports = router;