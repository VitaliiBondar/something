const express = require('express');
const router = express.Router();
const Cards = require('../models/cardModel');


router.get("/", (req, res) => {
    Cards.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, cardsData: data });
    });
});

router.post('/add', (req, res) => {
    console.log('/post work');
    let data = new Cards();

    const { id, title, name } = req.body;
    if (!id || !title || !name) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.id = id;
    data.title = title;
    data.name = name;
    console.log('data added ==>', data);
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

module.exports = router;