import React from 'react';
import './Rating.css';

const Rating = ({ rating, onRatingChange }) => {
  const maxRating = 5;

  const handleClick = (selectedRating) => {
    onRatingChange(selectedRating);
  };

  return (
    <div className="rating">
      <span className="rating-label">Rate:</span>
      <div className="stars">
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              className={`star ${starValue <= rating ? 'active' : ''}`}
              onClick={() => handleClick(starValue)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
