import React, { useState } from 'react';
// import CookieCard from '../RatingCard';
import RadioGroupRating from '../RatingStar';
import { styled } from '@mui/material/styles';

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { ReactComponent as StarIcon } from '../../../rate.svg'

import './style.scss';

// const StyledButton = styled(Button)`
//     font-family: inherit;
//     cursor: pointer;
//     background: rgba(var(--tmdbDarkBlue),1);
//     color: #f9f9f9;
//     border: 0;
//     border-radius: 8px;
//     padding: 20px 36px;
//     font-size: 2.5vh;
// `
// const RatingIcon = styled(SentimentVerySatisfiedIcon)`
//   cursor: pointer;
//   color: #ffffff;
//   border: 0;
//   font-size: 80px;

// `

const RatingPopup = ({movie}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        {/* <IconButton variant="outlined" color="warning" aria-label="add an alarm"> */}
          {/* <SentimentVerySatisfiedIcon color="warning"/> */}

        {/* <RatingIcon onClick={toggleModal} /> */}
      {/* </IconButton> */}
      {/* <StarIcon onClick={toggleModal} /> */}
        <svg className="animated-icon" fill="#ffffff" height="80px" width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.667 490.667" xmlSpace="preserve" onClick={toggleModal}>
        <g>
          <g>
            <g>
              <path className="icon-path" d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333 S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224 S368.853,469.333,245.333,469.333z"/>
              <path className="icon-path" d="M404.779,199.147c-1.365-3.883-4.821-6.635-8.896-7.083l-90.539-10.048l-50.667-91.179 c-3.755-6.763-14.891-6.763-18.645,0l-50.667,91.179l-90.539,10.048c-4.075,0.469-7.552,3.221-8.896,7.083 c-1.365,3.861-0.384,8.171,2.517,11.072l70.635,70.635L138.88,381.909c-0.811,4.075,0.811,8.256,4.16,10.709 c3.371,2.475,7.851,2.731,11.477,0.704l90.816-50.453l90.816,50.453c1.621,0.896,3.413,1.344,5.184,1.344 c2.219,0,4.437-0.683,6.336-2.048c3.349-2.453,4.971-6.635,4.16-10.709l-20.203-101.056l70.635-70.635 C405.163,207.317,406.144,203.008,404.779,199.147z M312.469,269.803c-2.517,2.539-3.627,6.144-2.923,9.643l16.811,84.032 l-75.84-42.133c-1.621-0.896-3.413-1.344-5.184-1.344s-3.563,0.448-5.184,1.344l-75.84,42.133l16.811-84.032 c0.683-3.499-0.405-7.125-2.923-9.643l-58.965-58.987l73.941-8.213c3.435-0.384,6.464-2.389,8.149-5.419l44.011-79.211 l44.011,79.211c1.685,3.008,4.715,5.035,8.149,5.419l73.941,8.213L312.469,269.803z"/>
            </g>
          </g>
        </g>
      </svg>


      {/* <StyledButton variant="outlined" startIcon={<SentimentVerySatisfiedIcon style={{ fontSize: '80px' }} />} onClick={toggleModal}>Rate</StyledButton> */}
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


