import React, { useState } from 'react';
import './Bookmark.css';

const Book = ({ title, author, imageUrl }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className={`book ${isBookmarked ? 'bookmarked' : ''}`}>
      <div className="book-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">Author: {author}</p>
        <button
          className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}
          onClick={toggleBookmark}
        >
          {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        </button>
      </div>
    </div>
  );
};

export default Book;
