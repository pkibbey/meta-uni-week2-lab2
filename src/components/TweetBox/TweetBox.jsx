import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({ setTweets, userProfile, tweetText, setTweetText}) {  
  console.log('tweetText: ', tweetText.length);
  const handleOnTweetTextChange = (e) => setTweetText(e.target.value)

  const handleOnSubmit = () => {
    setTweets(tweets => [...tweets, {
      comments: 0,
      handle: userProfile.handle,
      id: tweets.length,
      likes: 0,
      name: userProfile.name,
      retweets: 0,
      text: tweetText
    }])
    setTweetText('')
  }

  return (
    <div className="tweet-box">
      <TweetInput handleOnChange={handleOnTweetTextChange} value={tweetText} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount count={140 - tweetText.length} />
        <TweetSubmitButton count={tweetText.length} handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount({ count }) {
  return <span className={`tweet-length${count < 0 ? ' tweet-error' : ' '}`}>{count !== 140 ? count : ''}</span>
}

export function TweetSubmitButton({ handleOnSubmit, count }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button 
        className="tweet-submit-button" 
        onClick={handleOnSubmit}
        disabled={count === 0 || count > 140}
      >Tweet</button>
    </div>
  )
}
