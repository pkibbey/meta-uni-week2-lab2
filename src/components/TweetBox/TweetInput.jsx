import * as React from 'react';
import AvatarIcon from '../AvatarIcon/AvatarIcon';

export default function TweetInput({ value, handleOnChange }) {
  return (
    <div className="tweet-textarea">
      <AvatarIcon />
      <textarea
        name="new-tweet-input"
        type="text"
        placeholder="What's Happening?"
        value={value}
        onChange={handleOnChange}
      />
      <SmileIcon />
    </div>
  );
}

export function SmileIcon() {
  return <i className="fas fa-smile" />;
}
export function ImageIcon() {
  return <i className="fas fa-image" />;
}
