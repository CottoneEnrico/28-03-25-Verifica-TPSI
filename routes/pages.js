const express = require('express');
const router = express.Router();
const users = require('../users.json');

router.get('/people/:email', (req, res) => {
    const user = users.find(u => u.email === req.params.email);
    if (user) {
        res.render('people', { user });
    } else {
        res.status(404).send('Utente non trovato');
    }
});

module.exports = router;