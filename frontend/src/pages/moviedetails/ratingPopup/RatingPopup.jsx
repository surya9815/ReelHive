import React, { useState } from 'react';
// import CookieCard from '../RatingCard';
import RadioGroupRating from '../RatingStar';
import { styled } from '@mui/material/styles';

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Button from '@mui/material/Button';
import './style.scss';

const StyledButton = styled(Button)`
    font-family: inherit;
    cursor: pointer;
    background: rgba(var(--tmdbDarkBlue),1);
    color: #f9f9f9;
    border: 0;
    border-radius: 8px;
    padding: 20px 36px;
    font-size: 20px;
`

const RatingPopup = ({movie}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
      <StyledButton variant="outlined" startIcon={<SentimentVerySatisfiedIcon style={{ fontSize: '60px' }} />} onClick={toggleModal}>Rate</StyledButton>
        {/* <button onClick={toggleModal} type="button">Rate</button> */}
        {isOpen && (
          <div className="modal-background" onClick={toggleModal}>
            <div className="card">
                <SentimentVerySatisfiedIcon color="warning"/>
                <p className="cookieHeading">Rate This</p>
                {/* <p className="cookieHeading"></p> */}
                <p className="cookieDescription">
                    {movie.title}
                <br />
                </p>

                <RadioGroupRating />
                {/* <div className="buttonContainer"> */}
                    <button className="acceptButton">Rate</button>
                {/* </div> */}
                </div>
          </div>
        )}
      </>
    );
  };
export default RatingPopup;


