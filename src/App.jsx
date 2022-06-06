import React, { useState } from 'react';
import Feed from './components/Feed/Feed';
import Navbar from './components/Navbar/Navbar';
import UserProfile from './components/UserProfile/UserProfile';
import Advertisements from './components/Advertisements/Advertisements';
import { codepathUserProfile, firstTweet, navLinks } from './constants';

export default function App() {
  const [tweets, setTweets] = useState([firstTweet]);
  const [tweetText, setTweetText] = useState('');

  return (
    <div className="app">
      <Navbar navLinks={navLinks} />
      <main>
        <UserProfile userProfile={codepathUserProfile} />
        <Feed
          tweets={tweets}
          setTweets={setTweets}
          userProfile={codepathUserProfile}
          tweetText={tweetText}
          setTweetText={setTweetText}
        />
        <Advertisements />
      </main>
    </div>
  );
}
