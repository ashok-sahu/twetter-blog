const router = require("express").Router();
const twitterController = require("../controllers/twitter.controller");

router.get("/recent", twitterController.getRecent);
module.exports = router;
