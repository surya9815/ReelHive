import React from 'react'
import { AppBar,Toolbar,styled,Box,Typography,InputBase } from '@mui/material'
// import { logoURL } from '../../constants/constants'
import { Menu,BookmarkAdd,ExpandMore } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p {
            font-size: 14px;
            font-weight: 600;
        }
    }
`
const Logo = styled('img')({
    // width: 60
    height:53
})

const Header = () => {
  return (
    <AppBar>
        <StyledToolBar>
            {/* <img src={logoURL} alt='logo'/> */}
            <Logo src={process.env.PUBLIC_URL + '/ReelHiveLogo.png'} alt="Logo" />
            <Box>
                <Menu />
                <Typography>Menu</Typography>
            </Box>
            <InputBase  />
            <Typography>IMDB<Box component='span'>Pro</Box></Typography>
            <Box>
                <BookmarkAdd />
                <Typography>Watchlist</Typography>
            </Box>
            <Typography>Sign In</Typography>
            <Box>
                <Typography>En</Typography>
                <ExpandMore />
            </Box>
        
        </StyledToolBar>
    </AppBar>

  )
}

export default Header