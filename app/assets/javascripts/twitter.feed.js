// TODO: [@marc_gagne] Implement a twitter client ;)
twttr.widgets.createTweet(
    '20',
    document.getElementById('container'),
    {
      theme: 'dark'
    }
  ).then( function( el ) {
    console.log('Tweet added.');
  });