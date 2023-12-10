const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken");

// REGISTER
// =============================================================================
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD
    ).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
// ======================================================================

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user &&
      res.status(401).json({
        message: `No user found with the username ${user}. Please make sure it's correct and try again.`,
      });

    //DECRYPT PASSWORD
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD
    );

    const OrginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OrginalPassword !== req.body.password &&
      res.status(401).json("Incorrect Credentials");

    // CREATE JSON_WEB_TOKEN
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    // SEND OTHER INFO EXCEPT "PASSWORD"
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
