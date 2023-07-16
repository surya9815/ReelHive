// import { Margin } from '@mui/icons-material';
import { Typography,styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Title = styled(Typography)`
  color: #FFFFFF;
  display:flex
`

const StyledBanner = styled('img')({
    width: '90%',
    marginTop: 20,
    
})
const Slide = ({ movies }) => {
  return (
    <>
    <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        slidesToSlide={1}
        >
        {
            movies.map(movie => (
                <>
                    <StyledBanner src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='banner' /> 
                    <Title>{movie.original_title}</Title>
                </>
            ))
        }
        </Carousel>
    </>
  )
}

export default Slide