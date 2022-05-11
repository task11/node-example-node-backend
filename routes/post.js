const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('post');
});

router.post('/', (req, res) => {
    const name = req.body.name;
    const number = req.body.phone;
    const date = req.body.date;
    //요청.

    //응답.
    res.json({ name: name, number: number, date: date });
});

router.post('/', (req, res) => {
    res.redirect('/expost');
});

module.exports = router;