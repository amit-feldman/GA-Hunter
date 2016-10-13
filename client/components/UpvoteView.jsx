import React from 'react';

function UpvoteView() {
  return (
    <button className="btn btn-xs btn-upvote">
      <svg width="9" height="8" viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg">
        <title>Like</title>
        <path d="M9 8H0l4.5-8L9 8z" fillRule="evenodd" />
      </svg>
      &nbsp;
      66
    </button>
  );
}

export default UpvoteView;
