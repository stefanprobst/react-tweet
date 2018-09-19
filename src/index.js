import React from 'react';

// https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
window.twttr = (function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
})(document, 'script', 'twitter-wjs');

class Tweet extends React.Component {
  ref = React.createRef();
  tweetPromise = null;

  componentDidMount() {
    window.twttr.ready(() => {
      this.tweetPromise = this.loadTweet(this.props.id);
    });
  }

  componentWillUnmount() {
    this.tweetPromise = null;
  }

  loadTweet = id => window.twttr.widgets.createTweet(id, this.ref.current);

  render() {
    return <div ref={this.ref} />;
  }
}

export default Tweet;
