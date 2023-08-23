import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'components/services/api';

import { ReviewStyled } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const result = await getMovieReviews(movieId);
                setReviews(result.results);
                // console.log("fdf",result)
            } catch (error) {
              console.log(error);
            }
          }
          fetchReviews();
    }, [movieId]);

    return (
        <>
     <div>
        {reviews.length === 0 ? <p>No reviews available</p> : reviews.map((review) => (
            <ReviewStyled key={review.id}>
                <div className="review-header">
                    <div className="avatar">
                        {review.author_details && review.author_details.avatar_path ? (
                            <img src={`https://image.tmdb.org/t/p/w100_and_h100_face/${review.author_details.avatar_path}`} alt="Avatar" />
                        ) : (
                            <div className="avatar">
                                <img src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" alt="No Avatar" />
                            </div>
                        )}
                    </div>
                    <div className="author-details">
                        <p className="author-name">{review.author}</p>
                        <p className="rating">Rating: {review.author_details.rating || "N/A"}</p>
                        <p className="created-at">
                            {new Date(review.created_at).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </p>
                    </div>
                </div>
                <div className="review-content">
                    <p>{review.content}</p>
                </div>
            </ReviewStyled>
        ))}
    </div>
    </>
    );
};

export default Reviews;