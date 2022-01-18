const express = require('express');
const router = express.Router();
const { Game } = require('../../../models/');

router.get('/', async (req, res) => {
    const games = await Game.findAll();
    if (games.length === 0) {
        res.json('No games found');
    } else {
        res.json(games);
    }
});

module.exports = router;
