import React from 'react'
import "./style.scss"

import { Box,Typography,styled,Divider } from '@mui/material'
import { useEffect,useState } from 'react';
import Header from '../../components/header/Header'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLocation } from 'react-router-dom';
import { POPULAR_API_URL,TOPRATED_API_URL,UPCOMING_API_URL, moviesType } from '../../constants/constants';
import MoviesList from '../../components/MoviesList';
import { categoryMovies } from '../../services/api';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
`
  
const StyledBanner = styled('img')({
    height: 450,
    width: '100%'

})

const Component = styled(Box)`
    width: 80%;
    margin: auto;
`
const Container = styled(Box)`
    background: #F5F5F5;
    padding: 10px;
`


const CategoryMovies = () => {
    const [movies,setMovies] = useState([]);
    const { search } = useLocation();

    useEffect(() =>{
        const getData = async (API_URL) => {
            let response = await categoryMovies(API_URL);
            setMovies(response.results);
        }
        let API_URL;
        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL
        
        }else if (search.includes('upcoming')){
            API_URL = UPCOMING_API_URL

        }else if (search.includes('toprated')){
            API_URL = TOPRATED_API_URL

        }

        getData(API_URL);
    },[search])
  return (
    <>
        {/* <Header /> */}
        <Component>
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
                        {/* <Title>{movie.original_title}</Title> */}
                    </>
                ))
            }
            </Carousel>
            <Container>
                <Typography variant='h6'>IMDB Charts                </Typography>
                <Typography variant='h4'>IMDB {moviesType[search.split('=')[1]]} Movies </Typography>
                <Typography style={{ fontSize: 12, margin: 5 }} >IMDB Top {movies.length} as rated by regular IMDB Voters                </Typography>
                <Divider />
                <MoviesList movies={movies} />
            </Container>
        </Component>
    </>
  )
}

export default CategoryMovies