import React from 'react'
import "./style.scss"
import { useState,useEffect } from 'react';
import { AppBar,Toolbar,styled,Box,Typography,InputBase } from '@mui/material'
// import { logoURL } from '../../constants/constants'
import { Menu,BookmarkAdd,ExpandMore } from '@mui/icons-material';
import { useNavigate,useLocation } from 'react-router-dom';
// Icons
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// Compponents
import HeaderMenu from './HeaderMenu';
import { routePath } from '../../constants/route';
import ContentWrapper from '../contentWrapper/ContentWrapper';



const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > * {
        padding: 0 16px;
    }
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
const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;

`

const Logo = styled('img')({
    // width: 60
    height:53
})

const Header = () => {
    const [show, setShow] = useState("top")
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    // const navigate = useNavigate();
    const location = useLocation();

    const [open,setOpen] = useState(null); 
    // refresh slider for header 
    useEffect(() => {
        window.scrollTo(0,0);
    },[location])

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const navigate = useNavigate();
    const handleClose = () => {
        setOpen(null)
    }

// Search
    const openSearch = () =>{
        setMobileMenu(false)
        setShowSearch(true)
    }
    
    const openMobileMenu = () =>{
        setMobileMenu(true)
        setShowSearch(false)
    }
    // For Header Transition
    const controlNavbar = () =>{
        // console.log(window.scrollY);
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu){
                setShow("hide")
            } else{
                setShow("show")
            }
        }else {
            setShow("top")
        }
        setLastScrollY(window.scrollY);

    }
    useEffect(() =>{
        window.addEventListener("scroll",controlNavbar)
        return () => {
            window.removeEventListener("scroll",controlNavbar)
        }
    },[lastScrollY])

    const searchQueryHandler = (event) =>{
        if (event.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            },1000);
        }
    }
  return (
    <AppBar position='static' className={`header ${mobileMenu ? "mobileView" : ""}${show}`}>
        <StyledToolBar>
            {/* <img src={logoURL} alt='logo'/> */}
            <Logo src={process.env.PUBLIC_URL + '/ReelHiveLogo.png'} alt="Logo" onClick = {() => navigate(routePath.home)}/>
            <Box onClick={handleClick}>
                <Menu />
                <Typography>Menu</Typography>
            </Box>
            <HeaderMenu open={open} handleClose={handleClose}/>
            <InputSearchField  />
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
            <div className="mobileMenuItems">
                <SearchIcon onClick={openSearch} />
                {mobileMenu ? (
                    <CloseIcon onClick={() => setMobileMenu(false)} />
                ) : (
                    <MenuIcon onclick={openMobileMenu} />
                )}
            </div>
        </StyledToolBar>
            {showSearch && (
                    <div className="searchBar">
                        <ContentWrapper>
                            <div className="searchInput">
                                <input
                                    type="text"
                                    placeholder="Search for a movie or tv show...."
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyUp={searchQueryHandler}
                                />
                                <CloseIcon
                                    onClick={() => setShowSearch(false)}
                                />
                            </div>
                        </ContentWrapper>
                    </div>
                )}
    </AppBar>

  )
}

export default Header