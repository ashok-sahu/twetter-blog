const Twitter = require("../config/TwitterConfig");
const notifier = require('node-notifier');
const { URLSearchParams } = require('url');
const fetch = require('node-fetch');

const open = require('open');
const franc = require('franc')

exports.allTweets = async (req, res) => {
  const params = req.params;
  console.log(params)
  try {
    await Twitter.get("search/tweets", {
      q: "education system in india",
      count: 9,
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
    fetch(`https://api.twitter.com/2/tweets/search/recent?query=${query}`,
  {
    method: 'get',
    headers: { 'Content-Type': 'application/json',"Authorization":'bearer AAAAAAAAAAAAAAAAAAAAADIsKQEAAAAAbURqr7Ck%2FbuE3atBydHbGR4IRsY%3DMoNTymwC4ns6j3PiUsfHgqmkFLEwpzNNColffHEKcJvG8cu66b' },
  })
  .then(response => response.json())
  .then(json => res.status(200).json({
    data:json
  }));
  // try {
  //   await Twitter.get("search/tweets", {
  //     q: query,
  //     count: 9,
  //   }).then((response) => {
  //     return res.status(200).json({
  //       data: response,
  //       message: "success",
  //       status: true,
  //     });
  //   });
  // } catch (err) {
  //   return res.status(400).json({
  //     status: false,
  //     message: "failed to load",
  //   });
  // }
}

exports.getDetailTweet = async(req,res)=>{
  const id = `${req.params.id}`
  // fetch(`https://api.twitter.com/2/tweets/${id}`,
  // {
  //   method: 'get',
  //   headers: { 'Content-Type': 'application/json',"Authorization":'bearer AAAAAAAAAAAAAAAAAAAAADIsKQEAAAAAbURqr7Ck%2FbuE3atBydHbGR4IRsY%3DMoNTymwC4ns6j3PiUsfHgqmkFLEwpzNNColffHEKcJvG8cu66b' },
  // })
  // .then(response => response.json())
  // .then(json => res.status(200).json({
  //   data:json
  // }));

  try {
    await Twitter.get("statuses/show", {
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

exports.latestTweets = async(req,res,next)=>{
  let latestTweets = [];
  let stream = Twitter.stream("statuses/filter",{track:"#newyork"})
    stream.on('tweet',function(tweet){
      console.log(tweet)
      if(tweet){
        latestTweets.push(tweet)
      }
    })
    stream.on('data',function(response){
      if(response){
        res.status(200).json({
          data:response
        })
      }
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