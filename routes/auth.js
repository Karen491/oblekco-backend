const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Login process
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user === null)
        return res.status(404).json({ msg: "Username not found" });

      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          const withoutPass = user.toObject();
          delete withoutPass.password;
          const token = jwt.sign({ id: user._id }, process.env.SECRET);
          res.cookie("token", token, {
            expires: new Date(Date.now() + 86400000),
            secure: false,
            httpOnly: true,
          }).json({ user: withoutPass })
        } else {
          return res.status(401).json({ msg: "Incorrect password" });
        }
      });
    })
    .catch((err) => res.status(400).json({ err }))
});

//Signup process
router.post("/signup", (req, res) => {
  const { name, last_name, email, password } = req.body;
  bcrypt.hash(password, 10).then((hashedPassword) => {
      const user = { name, last_name, email, password: hashedPassword };
      User.create(user).then(() => {
          res.status(201).json({ msg: "User created succesfully" });
      }).catch((err) => res.status(400).json(err));
  });
});

//Logout process
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ msg: "logout" });
});

module.exports = router;
