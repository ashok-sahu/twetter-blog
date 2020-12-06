const router = require("express").Router();
const twitterController = require("../controllers/twitter.controller");

// router.post("/recent", twitterController.recentTweets);
router.post("/search", twitterController.serchTweets);
router.get("/tweet/:id", twitterController.getDetailTweet);
router.get("/allTweets", twitterController.allTweets);
router.get("/latestTweets",twitterController.latestTweets)
// router.get("/monitorBylocation",twitterController.monitoringStatusbyLocation)
// router.post("/postStatus",twitterController.postStatus)

module.exports = router;
