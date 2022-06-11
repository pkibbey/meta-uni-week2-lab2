import * as React from 'react';
import AvatarIcon from '../AvatarIcon/AvatarIcon';
import './Navbar.css';

export default function Navbar({ navLinks }) {
  return (
    <nav>
      <div className="navbar-container">
        <NavLinks navLinks={navLinks} />
        <TwitterIcon />
        <SearchBar />
        <TweetButton />
      </div>
    </nav>
  );
}

export function NavLinks({ navLinks }) {
  return navLinks.map((navLink) => <NavLink key={navLink.label} navLink={navLink} />);
}

export function NavLink({ navLink }) {
  return (
    <li className={navLink.className}>
      <i className={navLink.icon} />
      <span>{navLink.label}</span>
    </li>
  );
}

export function TwitterIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-twitter" />
    </div>
  );
}

export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search Twitter" />
      <i className="fas fa-search" />
    </div>
  );
}

export function TweetButton() {
  return (
    <div className="tweet-button">
      <AvatarIcon />

      <button type="button">Tweet</button>
    </div>
  );
}
