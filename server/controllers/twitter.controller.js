const Twitter = require("../config/TwitterConfig");
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

exports.allTweets = async (req, res) => {
  const params = req.params;
  console.log(params)
  try {
    await Twitter.get("search/tweets", {
      q: "education system in india",
      count: 100,
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

exports.serchTweets = async(req,res)=>{
  let query = req.body.query
  try {
    await Twitter.get("search/tweets", {
      q: query,
      count: 10,
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
}

exports.recentTweets = async(req,res)=>{
  let query = `${req.body.text}`
  try {
    await Twitter.get("search", {
      q: query,
      count: 1,
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
}

exports.getDetailTweet = async(req,res)=>{
  const id = req.params.id
  try {
    await Twitter.get("tweets/suggestions/:id", {
      id:id
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
      error:err
    });
  }
}

exports.monitoringStatus = async(req,res)=>{
  let stream = Twitter.stream('statuses/filter', { track: '#india' })
    stream.on('tweet', function (tweet) {
        console.log(tweet)
        console.log(tweet.text);
        console.log('Language: ' + franc(tweet.text));
        console.log('------');
    })

    stream.on('tweet', function (tweet) {
      console.log(tweet)
      console.log(tweet.text);
      let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

      notifier.notify({
        title: tweet.user.name,
        message: tweet.text
      });

      notifier.on('click', async function(notifierObject, options, event) {
        console.log('clicked');
        await open(url);
      });
    })
}

exports.monitoringStatusbyLocation = async(req,res)=>{
  // 3. REAL TIME MONITORING USING STREAM (LOCATION)
  let bangalore = ['-12.9833', '77.5833','-11.9833', '78.5833']
  let stream = Twitter.stream('statuses/filter', { locations: bangalore })
  stream.on('tweet',function(tweet){
    console.log(tweet)
  })
}

exports.postStatus = async(req,res)=>{
  await Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    // console.log(data)
    console.log(err)
    // console.log(response)
  })
}