import { Box, Typography,styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PlayIcon } from '../../pages/moviedetails/Playbtn';
import './style.scss'


const Component  = styled(Box)`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 20px;
    & > p {
        color: #F5C518;
        font-weight: 18px;
        margin-bottom: 10px;
    }
`
const Poster = styled('img')({
    width: 88,
    borderRadius: 5,

})

const Wrapper = styled(Box)`
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  & > .details {
    display: flex;
    flex-direction: column;
    margin-left: 20px;


    & > p {
      margin-bottom: 5px;
    }
  }
`;




const UpNext = ({movies}) => {
  const navigate = useNavigate();

  return (
    <Component>
        <Typography fontWeight="bold">Up Next</Typography>
        {
            movies.splice(0,3).map(movie => (
                <Wrapper key={movie?.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                    <Poster src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='poster' /> 
            {/* <span className="text">Watch Details</span> */}
                    <Box className="details">
                        <div className="playbtnUpNext" >
                            <PlayIcon />
                            {/* <span className="text">
                                Watch Trailer
                            </span> */}
                        </div>
                        <Typography>{movie.original_title}</Typography>
                    </Box>
                </Wrapper>
            ))
        }
    </Component>
  )
}

export default UpNext