import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({ tweets, setTweets, userProfile, tweetText, setTweetText } ) {
  return (
    <div className="col feed">
      <TweetBox setTweets={setTweets} userProfile={userProfile} setTweetText={setTweetText} tweetText={tweetText} />

      <div className="see-new-tweets beet">
        <p>
          See <span>{tweets.length}</span> New Tweet{tweets.length === 1 ? '' : 's'}
        </p>
      </div>

      <div className="twitter-feed">
        {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
      </div>
    </div>
  )
}
