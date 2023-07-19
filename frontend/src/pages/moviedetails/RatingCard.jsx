import React from 'react';
import RatingStar from './RatingStar'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
// import Button from '@mui/material/Button';



const CookieCard = ({movie}) => {
  return (
    <div className="card">
    <SentimentVerySatisfiedIcon color="warning"/>
      <p className="cookieHeading">Rate This</p>
      {/* <p className="cookieHeading"></p> */}
      <p className="cookieDescription">
        {movie.title}
       <br />
      </p>

      <RatingStar />
      <div className="buttonContainer">
        <button className="acceptButton">Rate</button>
        {/* <button className="declineButton">Decline</button> */}
      </div>
    </div>
  );
};

export default CookieCard;
