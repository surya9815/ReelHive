import React from 'react'
import "./style.scss"

import { useEffect,useState } from 'react'
// import Header from '../../components/common/Header'
import { categoryMovies } from '../../services/api'
import { NOWPLAYING_API_URL } from '../../constants/constants'
import { Box,styled } from '@mui/material'
import Banner from '../../components/Banner'
import UpNext from '../../components/UpNext'
import Slide from '../../components/Slide'
// import { useSelector,useDispatch } from 'react-redux'
// import { getApiConfiguration,getGenres } from '../../store/homeSlice'
// import HeroBanner from './heroBanner/HeroBanner'
const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
  position: relative;
`
const Component = styled(Box)`
padding: 0 115px !important
padding: 20px 0;
  
`
const Opacity = styled('div')({
  width: '100%',
  height: '250px',
  background: 'linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%)',
  position: 'absolute',
  bottom: '0',
  left: '0',
});

const Home = () => {
  const [movies, setMovies] = useState([])
  // const dispatch = useDispatch()
  // const {url} = useSelector((state) => state.home)

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
      // dispatch(getApiConfiguration(response.results))
    }
    getData();
  },[])

  return (
    <>
      {/* <Header /> */}
      <Component>
        <Wrapper>
          <Banner movies={movies}/>
          <UpNext movies={movies}/>
        </Wrapper>
        <Opacity></Opacity>
          {/* {url?.total_pages} */}
          {/* <HeroBanner/> */}
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
      </Component>
    </>
    
  )
}

export default Home