const express = require('express');
const router = express.Router();
const users = require('../users.json');

router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/users/:email', (req, res) => {
    const user = users.find(user => user.email === req.params.email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Utente non trovato' });
    }
});

module.exports = router;