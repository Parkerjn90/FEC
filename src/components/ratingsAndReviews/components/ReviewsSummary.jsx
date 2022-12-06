import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx'

const ReviewsSummary = ({ reviewScores }) => {

  return (
    <div className="flex flex-column containerHalf border">
      <div className="flex flex-row">
        <div><h2>{reviewScores.ratingOutOf5}</h2></div>
        <StarRating data={reviewScores.ratingAsPercentRounded}/>
      </div>
      <div>Review summary by stars</div>
      <div>Review summary by charactistics</div>
    </div>
  )
}

export default ReviewsSummary;