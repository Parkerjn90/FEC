import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortReviews from './SortReviews.jsx'
// import { reviewData } from '../DummyData/reviewDummyData.js';
import axios from 'axios';

const ReviewsList = ({ product }) => {
  const [reviewsList , setReviewList ] = useState([]);
  // console.log('reviewsList from reviewslist.jsx', reviewsList);

  useEffect(() => {
      axios.get(`/reviews/${product.id}`)
      .then((res)=>{setReviewList(res.data.results)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})

  }, [])

  return (
    <div className = "flex flex-column containerHalf border">
      <SortReviews numReviews={reviewsList.length} />
      <div>
        {reviewsList.map((review, index)=>{
          return <ReviewTile key={index} review={review}/>
        })}
      </div>
      <div>
        <button>More Reviews</button>
        <button>Add Review +</button>
      </div>
    </div>
  )
}

export default ReviewsList;
//data shape for reference
// {
//   "review_id": 1277407,
//   "rating": 2,
//   "summary": "Great outfit",
//   "recommend": true,
//   "response": null,
//   "body": "Very comfortable!",
//   "date": "2022-10-28T00:00:00.000Z",
//   "reviewer_name": "Brian123",
//   "helpfulness": 1,
//   "photos": [
//       {
//           "id": 2456642,
//           "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1666985076/zcfhcxavufcg3hijsqsc.jpg"
//       }
//   ]
// },