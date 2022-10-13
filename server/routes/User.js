const express = require('express')
const router = express.Router()
const db = require('../config/db')
const bcrypt = require("bcrypt")


router.post("/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, function(err, hashPassword) {
            // Store hash in the database
            db.query(
                "INSERT INTO users (username, password) VALUES (?, ?);", [username, hashPassword],
                (err, results) => {
                console.log(err);
                res.send(results);
                console.log("acc created");
            }
            );
        });
    })
});

router.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?", 
        username,
        (err, results) => {
            if (err) {
                console.log(err)
            }
            if (results.length > 0) {
                  bcrypt.compare(password, results[0].password, function(err, validPassword) {
                    if (validPassword) {
                       // password is valid
                    console.log("You are logged in!");
                    res.json({loggedIn: true, username: username});
                } else {
                    res.json({loggedIn: false, message: "Wrong username, password combination"});
                }
                });
            } else {
                res.json({loggedIn: false, message: "This user does not exist"});
            }
    }
    );
});

module.exports = router;
