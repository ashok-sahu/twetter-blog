const router = require("express").Router();
const twitterController = require("../controllers/twitter.controller");

router.post("/recent", twitterController.recentTweets);
router.get("/search", twitterController.serchTweets);
router.get("/tweet/:id", twitterController.getDetailTweet);
router.get("/allTweets", twitterController.allTweets);
router.get("/monitorStatus",twitterController.monitoringStatus)
router.get("/monitorBylocation",twitterController.monitoringStatusbyLocation)
router.post("/postStatus",twitterController.postStatus)

module.exports = router;
