import { Box,styled } from '@mui/material';
import React,{useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { PlayIcon } from '../pages/moviedetails/Playbtn';
import VideoPopup from './videoPopup/VideoPopup';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const StyledBanner = styled('img')({
    width: '100%',
})
const Opacity = styled('div')({
  width: '100%',
  height: '250px',
  background: 'linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%)',
  position: 'absolute',
  bottom: '0',
  left: '0',
});
const Banner = ({ movies }) => {
  const navigate = useNavigate();
  const PosterBlock = ({ movie,video }) => {
    const posterUrl = `http://image.tmdb.org/t/p/w200/${movie.poster_path}`;
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
  
    return (
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '300px',
          display: 'flex',
          alignItems: 'flex-end',
          '& .textBlock': {
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            '& .title': {
              fontSize: '16px',
              marginBottom: '10px',
              lineHeight: '24px',
            },
            '& .playbtn': {
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '& .text': {
                marginLeft: '5px',
              },
            },
          },
        }}
      >
        <img
          src={posterUrl}
          alt='poster'
          style={{
            width: '60px',
            height: '90px',
            marginRight: '10px',
            borderRadius: '12px',
          }}
        />
        <div className="textBlock">
          <h3 className="title">{movie.title}</h3>
          <div
            className="playbtn"
            onClick={() => {
              setShow(true);
              setVideoId(video.key);
            }}
          >
            <PlayIcon />
            <span className="text">Watch Trailer</span>
          </div>
        </div>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </Box>
    );
  };
  

  return (
    // <Box style={{ width: '100%' }}>
    <Box sx={{ width: {xs:'100%',md: '65%' }}}>
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
            movies?.map(movie => (
              <Box key={movie.id} >
                <StyledBanner src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='banner' onClick={() => navigate(`/movie/${movie.id}`)} /> 
                <Opacity></Opacity>
                
                <PosterBlock movie={movie} video={movie.video} />
              </Box>
            ))
        }
        </Carousel>

    </Box>

  )
}

export default Banner