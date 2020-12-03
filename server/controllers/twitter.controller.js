const Twitter = require("../config/TwitterConfig");

exports.getRecent = async (req, res) => {
  try {
    await Twitter.get("search/tweets", {
      q: "education system in india",
      count: 2,
    }).then((response) => {
      return res.status(200).json({
        data: response,
        message: "success",
        status: true,
      });
    });
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: "failed to load",
    });
  }
};
