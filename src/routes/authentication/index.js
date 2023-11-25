
// const { createAuthCookie, logout } = require("../../api/authentication");
const { createAuthCookie, logout } = require("../../api/authentication/controllers");


const router = require("express").Router();

router.post("/jwt", createAuthCookie);
router.post("/logout", logout);

module.exports = router;
