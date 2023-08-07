import React from 'react'
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";
import StarIcon from '@mui/icons-material/Star';
const ReviewSection = () => {
  // Sample review data (replace with actual data)
  const reviews = [
        {
        id: 1,
        title: "Great Movie!",
        content: "This movie was absolutely fantastic. I was on the edge of my seat the whole time.",
        rating: 8, // Rating out of 10
        author: "MovieBuff123",
        },
        {
        id: 2,
        title: "Disappointing",
        content: "I had high hopes for this movie, but it fell short of my expectations.",
        rating: 8, // Rating out of 10
        author: "CinephileGuy",
        },
        {
        id: 3,
        title: "A Must-Watch",
        content: "Don't miss out on this incredible cinematic experience. It's a masterpiece.Don't miss out on this incredible cinematic experience. It's a masterpiece.",
        rating: 8, // Rating out of 10
        author: "FilmEnthusiast",
        },
        {
            id: 4,
            title: "Truly Magnificient",
            content: "Don't miss out on this incredible cinematic experience. It's a masterpiece.",
            rating: 8, // Rating out of 10
            author: "FilmEnthusiast",
            },
        // Add more reviews here...
    ];

    // Function to truncate text with ellipsis
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    // Display the latest 6 reviews in 3 columns
    const latestReviews = reviews.slice(0, 6).map((review) => (
        <div className="reviewBox" key={review.id}>
        <div className="rating"><StarIcon fontSize='small' /> {review.rating}/10</div>
        <div className="reviewTitle">{review.title}</div>
        <div className="reviewContent">{truncateText(review.content, 100)}</div>
        <div className="reviewAuthor">Reviewed by {review.author}</div>
        </div>
    ));

    return (
        <div className="reviewSection">
        <ContentWrapper>
            <div className="sectionHeading">Review Section</div>
            <div className="reviewBoxes">{latestReviews}</div>
        </ContentWrapper>
        </div>
    );
    }
export default ReviewSection