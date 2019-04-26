const express = require('express');
const router = express.Router();
const Users = require('../models/usersModel');


router.get("/", (req, res) => {
    Users.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, cardsData: data });
    });
});

router.post('/registr', (req, res) => {
    console.log('/post work');
    let data = new Users();

    const { login, lastName, name, email, password } = req.body;
    if (!lastName || !login || !name || !password || !email) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.lastName = lastName;
    data.login = login;
    data.name = name;
    data.email = email;
    data.password = password;
    console.log('data added ==>', data);
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

module.exports = router;