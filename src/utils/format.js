export const formatNumTweets = (numTweets) => new Intl.NumberFormat('en', { notation: 'compact', minimumFractionDigits: 3 }).format(numTweets).toLowerCase();

export const formatNumFollowers = (numFollowers) => new Intl.NumberFormat('en', { notation: 'compact', minimumFractionDigits: 1 })
  .format(numFollowers)
  .toLowerCase();

export const formatLikes = (numLikes) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(numLikes).toLowerCase();
