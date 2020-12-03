const Twit = require('twit')
// const notifier = require('node-notifier');
// const open = require('open');
// const franc = require('franc')

var T = new Twit({
    consumer_key: "jyxqRSeXuJ92JAYlGljbnL3DN",
    consumer_secret: '9WciNNKDHtKutKYy0wGyVAmMpIyzAoSApDc5J0L8V7BM00J0ev',
    access_token: '1334099688715272192-CxQxbKQuSvZrBFfMP23f77R1psPQtc',
    access_token_secret: 'U2I7Nuq8VsGkprXsedwZTc1ClIt2qzjNBviTo86uapNW0',
});

(async () => {
    // //1. GET RECENT TWEETS
    T.get('search/tweets', { q: 'education in india', count: 2 }, function(err, data, response) {
      const tweets = data.statuses
      // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
      .map(tweet => tweet.text)
      .filter(tweet => tweet.toLowerCase().includes('elon'));
      console.log(data);
    })

    //2. REAL TIME MONITORING USING STREAM (HASHTAG)
    // var stream = T.stream('statuses/filter', { track: '#tesla' })
    // stream.on('tweet', function (tweet) {
    //     console.log(tweet.text);
    //     // console.log('Language: ' + franc(tweet.text));
    //     // console.log('------');
    // })

    // 3. REAL TIME MONITORING USING STREAM (LOCATION)
    // var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
    // var stream = T.stream('statuses/filter', { locations: sanFrancisco })
    
    // //SHOW NOTIFICATION FOR EACH RECEIVED TWEET
    // stream.on('tweet', function (tweet) {
    //   console.log(tweet.text);
    //   let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

    //   notifier.notify({
    //     title: tweet.user.name,
    //     message: tweet.text
    //   });

    //   notifier.on('click', async function(notifierObject, options, event) {
    //     console.log('clicked');
    //     await open(url);
    //   });
    // })
})();