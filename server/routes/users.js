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

    const { login, lastName, firstName, email, password } = req.body;
    if (!lastName || !login || !firstName || !password || !email) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.lastName = lastName;
    data.login = login;
    data.firstName = firstName;
    data.email = email;
    data.password = password;
    console.log('data added ==>', data);
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, msg:"Thanks for registration" });
    });
});

router.post('/login', (req, res) => {
    // console.log(req);

    const { login, password } = req.body;
    let userLogin = req.body.login;
    let userPassword = req.body.password;
    if (!login || !password ) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    Users.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        let result = "Wrong login";
        let state = false;
        data.forEach(user=>{if (user.login==userLogin && user.password==userPassword) {result=user.login; state=true}});
        // console.log(req);
        return res.json({ success: state, login: result });
    });
});

router.post('/getInfo', (req, res) => {

    const { login } = req.body;
    let userLogin = req.body.login;
    if (!login ) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    Users.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        let result = "Wrong login";
        let state = false;
        data.forEach(user=>{if (user.login==userLogin) {result=user; state=true}});
        // console.log(req);
        return res.json({ success: state, login: result });
    });
});



module.exports = router;