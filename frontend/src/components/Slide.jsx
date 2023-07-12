// import { Margin } from '@mui/icons-material';
import { Typography,styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
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
  
// const StyledBanner = styled('img')`
//     width: 100,
//     margin-top: 20px
// `
const StyledBanner = styled('img')({
    width: '100%',
    // margin-top: 20
})
const Slide = ({ movies }) => {
  return (
    <>
    <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        // showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        slidesToSlide={1}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
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