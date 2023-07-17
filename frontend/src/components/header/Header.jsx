import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { BookmarkAdd, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
// import logo from "../../assets/movix-logo.svg";
// // import { logoURL } from '../../constants/constants'
const InputSearchField = styled(InputBase)`
  background: #FFFFFF;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const navigationHandler = (type) => {
        if (type === "movie") {
            navigate("/explore/movie");
        } else {
            navigate("/explore/tv");
        }
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    
                    <img src={process.env.PUBLIC_URL + '/ReelHiveLogo.png'} alt="" />
                </div>
                <ul className="menuItems">
                    <li className="menuItem">
                    <Box flexGrow={1} display={{ xs: "none", md: "block" }}>
                        <InputSearchField
                            placeholder="Search for a movie or tv show...."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                    </Box>
                    </li>
                    <li className="menuItem">
                         <BookmarkAdd />
                         <Typography>Watchlist</Typography>
                    </li>
                    <li className="menuItem">
                        <Typography>Sign In</Typography>
                    </li>
                    <li className="menuItem">
                        <Box>
                            <Typography>En</Typography>
                            <ExpandMore />
                        </Box>
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Movies
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("tv")}
                    >
                        TV Shows
                    </li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>

                <div className="mobileMenuItems">
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                        ) : (
                            <SlMenu onClick={openMobileMenu} />
                            )}
                    {/* <div className="logo" onClick={() => navigate("/")}>
                    
                        <img src={process.env.PUBLIC_URL + '/ReelHiveLogo.png'} alt="" />
                    </div> */}
                    <HiOutlineSearch onClick={openSearch} />
                    
                </div>
            </ContentWrapper>
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
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;


// import React, { useState, useEffect } from "react";
// import { HiOutlineSearch } from "react-icons/hi";
// import { SlMenu } from "react-icons/sl";
// import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
// import { BookmarkAdd, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';
// import { VscChromeClose } from "react-icons/vsc";
// import { useNavigate, useLocation } from "react-router-dom";

// import "./style.scss";

// import ContentWrapper from "../contentWrapper/ContentWrapper";
// // import logo from "../../assets/movix-logo.svg";
// // // import { logoURL } from '../../constants/constants'
// const InputSearchField = styled(InputBase)`
//   background: #FFFFFF;
//   height: 30px;
//   width: 65%;
//   border-radius: 5px;
// `;

// const Header = () => {
//     const [show, setShow] = useState("top");
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [mobileMenu, setMobileMenu] = useState(false);
//     const [query, setQuery] = useState("");
//     const [showSearch, setShowSearch] = useState("");
//     const navigate = useNavigate();
//     const location = useLocation();

//     const controlNavbar = () => {
//         if (window.scrollY > 200) {
//             if (window.scrollY > lastScrollY && !mobileMenu) {
//                 setShow("hide");
//             } else {
//                 setShow("show");
//             }
//         } else {
//             setShow("top");
//         }
//         setLastScrollY(window.scrollY);
//     };

//     useEffect(() => {
//         window.scrollTo(0, 0);
//         window.addEventListener("scroll", controlNavbar);
//         return () => {
//             window.removeEventListener("scroll", controlNavbar);
//         };
//     }, [lastScrollY]);

//     const searchQueryHandler = (event) => {
//         if (event.key === "Enter" && query.length > 0) {
//             navigate(`/search/${query}`);
//             setTimeout(() => {
//                 setShowSearch(false);
//             }, 1000);
//         }
//     };

//     const openSearch = () => {
//         setMobileMenu(false);
//         setShowSearch(true);
//     };

//     const openMobileMenu = () => {
//         setMobileMenu(true);
//         setShowSearch(false);
//     };

//     const navigationHandler = (type) => {
//         if (type === "movie") {
//             navigate("/explore/movie");
//         } else {
//             navigate("/explore/tv");
//         }
//         setMobileMenu(false);
//     };

//     return (
//         <AppBar position="fixed" className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
//             <ContentWrapper>
//                 <Toolbar>
//                     <div className="logo" onClick={() => navigate("/")}>
//                         <img src={process.env.PUBLIC_URL + '/ReelHiveLogo.png'} alt="" />
//                     </div>
//                     <Box flexGrow={1} display={{ xs: "none", md: "block" }}>
//                         <InputSearchField
//                             placeholder="Search for a movie or tv show...."
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                             onKeyUp={searchQueryHandler}
//                         />
//                     </Box>
//                     <Box display={{ xs: "block", md: "none" }}>
//                         <HiOutlineSearch onClick={openSearch} />
//                     </Box>
//                     <ul className="menuItems">
//                         <li className="menuItem">
//                             <Box display={{ xs: "none", md: "flex" }}>
//                                 <BookmarkAdd />
//                                 <Typography>Watchlist</Typography>
//                             </Box>
//                         </li>
//                         <li>
//                             <Typography>Sign In</Typography>
//                         </li>
//                         <li className="menuItem">
//                             <Box>
//                                 <Typography>En</Typography>
//                                 <ExpandMore />
//                             </Box>
//                         </li>
//                         <li
//                             className="menuItem"
//                             onClick={() => navigationHandler("movie")}
//                         >
//                             Movies
//                         </li>
//                         <li
//                             className="menuItem"
//                             onClick={() => navigationHandler("tv")}
//                         >
//                             TV Shows
//                         </li>
//                         <li className="menuItem">
//                             <HiOutlineSearch onClick={openSearch} />
//                         </li>
//                     </ul>
//                     <Box display={{ xs: "block", md: "none" }}>
//                         {mobileMenu ? (
//                             <VscChromeClose onClick={() => setMobileMenu(false)} />
//                         ) : (
//                             <SlMenu onClick={openMobileMenu} />
//                         )}
//                     </Box>
//                 </Toolbar>
//             </ContentWrapper>
//             {showSearch && (
//                 <div className="searchBar">
//                     <ContentWrapper>
//                         <div className="searchInput">
//                             <input
//                                 type="text"
//                                 placeholder="Search for a movie or tv show...."
//                                 onChange={(e) => setQuery(e.target.value)}
//                                 onKeyUp={searchQueryHandler}
//                             />
//                             <VscChromeClose
//                                 onClick={() => setShowSearch(false)}
//                             />
//                         </div>
//                     </ContentWrapper>
//                 </div>
//             )}
//         </AppBar>
//     );
// };

// export default Header;






// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
// import { Menu, BookmarkAdd, ExpandMore, Search, Close, Menu as MenuIcon } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { routePath } from '../../constants/route';
// import ContentWrapper from '../contentWrapper/ContentWrapper';
// import HeaderMenu from './HeaderMenu';

// const StyledToolBar = styled(Toolbar)`
//   background: #121212;
//   min-height: 56px !important;
//   padding: 0 5vw !important;
//   justify-content: space-between;
//   & > * {
//     padding: 0 16px;
//   }
//   & > div {
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     & > p {
//       font-size: 14px;
//       font-weight: 600;
//     }
//   }
// `;

// const InputSearchField = styled(InputBase)`
//   background: #FFFFFF;
//   height: 30px;
//   width: 55%;
//   border-radius: 5px;
// `;

// const Logo = styled('img')({
//   height: 53
// });

// const Header = () => {
//   const [show, setShow] = useState(true);
//   const [mobileView, setMobileView] = useState(false);
//   const [query, setQuery] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   const handleMenuClick = () => {
//     setMobileView(!mobileView);
//   };

//   const handleCloseMenu = () => {
//     setMobileView(false);
//   };

//   const handleSearchClick = () => {
//     setShowSearch(true);
//   };

//   const handleMobileMenuClick = () => {
//     setMobileView(true);
//     setShowSearch(false);
//   };

//   const handleSearchQuery = (event) => {
//     if (event.key === 'Enter' && query.length > 0) {
//       navigate(`/search/${query}`);
//       setTimeout(() => {
//         setShowSearch(false);
//       }, 1000);
//     }
//   };

//   const controlNavbar = () => {
//     if (window.scrollY > 200) {
//       setShow(false);
//     } else {
//       setShow(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', controlNavbar);
//     return () => {
//       window.removeEventListener('scroll', controlNavbar);
//     };
//   }, []);

//   return (
//     <AppBar position="static" className={`header ${mobileView ? 'mobileView' : ''}${show ? '' : ' hide'}`}>
//       <StyledToolBar>
//         <Logo src={process.env.PUBLIC_URL + '/ReelHiveLogo.png'} alt="Logo" onClick={() => navigate(routePath.home)} />
//         {!mobileView && (
//           <>
//             <Box onClick={handleMenuClick}>
//               <Menu />
//               <Typography>Menu</Typography>
//             </Box>
//             <HeaderMenu open={mobileView} handleClose={handleCloseMenu} />
//             <InputSearchField placeholder="Search for a movie or tv show...." onChange={(e) => setQuery(e.target.value)} onKeyUp={handleSearchQuery} />
//             <Typography>IMDB<Box component="span">Pro</Box></Typography>
//             <Box>
//               <BookmarkAdd />
//               <Typography>Watchlist</Typography>
//             </Box>
//             <Typography>Sign In</Typography>
//             <Box>
//               <Typography>En</Typography>
//               <ExpandMore />
//             </Box>
//           </>
//         )}
//         {mobileView && (
//           <div className="mobileMenuItems">
//             <Search onClick={handleSearchClick} />
//             {mobileView ? <Close onClick={() => setMobileView(false)} /> : <MenuIcon onClick={handleMobileMenuClick} />}
//           </div>
//         )}
//       </StyledToolBar>
//       {showSearch && (
//         <div className="searchBar">
//           <ContentWrapper>
//             <div className="searchInput">
//               <input
//                 type="text"
//                 placeholder="Search for a movie or tv show...."
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyUp={handleSearchQuery}
//               />
//               <Close onClick={() => setShowSearch(false)} />
//             </div>
//           </ContentWrapper>
//         </div>
//       )}
//     </AppBar>
//   );
// };

// export default Header;









// import React from 'react'
// import "./style.scss"
// import { useState,useEffect } from 'react';
// import { AppBar,Toolbar,styled,Box,Typography,InputBase } from '@mui/material'
// // import { logoURL } from '../../constants/constants'
// import { Menu,BookmarkAdd,ExpandMore } from '@mui/icons-material';
// import { useNavigate,useLocation } from 'react-router-dom';
// // Icons
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from '@mui/icons-material/Menu';
// // Compponents
// import HeaderMenu from './HeaderMenu';
// import { routePath } from '../../constants/route';
// import ContentWrapper from '../contentWrapper/ContentWrapper';



// const StyledToolBar = styled(Toolbar)`
//     background: #121212;
//     min-height: 56px !important;
//     padding: 0 115px !important;
//     justify-content: space-between;
//     & > * {
//         padding: 0 16px;
//     }
//     & > div {
//         display: flex;
//         align-items: center;
//         cursor: pointer;
//         & > p {
//             font-size: 14px;
//             font-weight: 600;
//         }
//     }
// `
// const InputSearchField = styled(InputBase)`
//     background: #FFFFFF;
//     height: 30px;
//     width: 55%;
//     border-radius: 5px;

// `

// const Logo = styled('img')({
//     // width: 60
//     height:53
// })

// const Header = () => {
//     const [show, setShow] = useState("top")
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [mobileMenu, setMobileMenu] = useState(false);
//     const [query, setQuery] = useState("");
//     const [showSearch, setShowSearch] = useState("");
//     // const navigate = useNavigate();
//     const location = useLocation();

//     const [open,setOpen] = useState(null); 
//     // refresh slider for header 
//     useEffect(() => {
//         window.scrollTo(0,0);
//     },[location])

//     const handleClick = (e) => {
//         setOpen(e.currentTarget);
//     }
//     const navigate = useNavigate();
//     const handleClose = () => {
//         setOpen(null)
//     }

// // Search
//     const openSearch = () =>{
//         setMobileMenu(false)
//         setShowSearch(true)
//     }
    
//     const openMobileMenu = () =>{
//         setMobileMenu(true)
//         setShowSearch(false)
//     }
//     // For Header Transition
//     const controlNavbar = () =>{
//         // console.log(window.scrollY);
//         if (window.scrollY > 200) {
//             if (window.scrollY > lastScrollY && !mobileMenu){
//                 setShow("hide")
//             } else{
//                 setShow("show")
//             }
//         }else {
//             setShow("top")
//         }
//         setLastScrollY(window.scrollY);

//     }
//     useEffect(() =>{
//         window.addEventListener("scroll",controlNavbar)
//         return () => {
//             window.removeEventListener("scroll",controlNavbar)
//         }
//     },[lastScrollY])

//     const searchQueryHandler = (event) =>{
//         if (event.key === "Enter" && query.length > 0){
//             navigate(`/search/${query}`);
//             setTimeout(() => {
//                 setShowSearch(false);
//             },1000);
//         }
//     }
//   return (
//     <AppBar position='static' className={`header ${mobileMenu ? "mobileView" : ""}${show}`}>
//         <StyledToolBar>
//             {/* <img src={logoURL} alt='logo'/> */}
//             <Logo src={process.env.PUBLIC_URL + '/ReelHiveLogo.png'} alt="Logo" onClick = {() => navigate(routePath.home)}/>
//             <Box onClick={handleClick}>
//                 <Menu />
//                 <Typography>Menu</Typography>
//             </Box>
//             <HeaderMenu open={open} handleClose={handleClose}/>
//             <InputSearchField  />
//             <Typography>IMDB<Box component='span'>Pro</Box></Typography>
//             <Box>
//                 <BookmarkAdd />
//                 <Typography>Watchlist</Typography>
//             </Box>
//             <Typography>Sign In</Typography>
//             <Box>
//                 <Typography>En</Typography>
//                 <ExpandMore />
//             </Box>
//             <div className="mobileMenuItems">
//                 <SearchIcon onClick={openSearch} />
//                 {mobileMenu ? (
//                     <CloseIcon onClick={() => setMobileMenu(false)} />
//                 ) : (
//                     <MenuIcon onclick={openMobileMenu} />
//                 )}
//             </div>
//         </StyledToolBar>
//             {showSearch && (
//                     <div className="searchBar">
//                         <ContentWrapper>
//                             <div className="searchInput">
//                                 <input
//                                     type="text"
//                                     placeholder="Search for a movie or tv show...."
//                                     onChange={(e) => setQuery(e.target.value)}
//                                     onKeyUp={searchQueryHandler}
//                                 />
//                                 <CloseIcon
//                                     onClick={() => setShowSearch(false)}
//                                 />
//                             </div>
//                         </ContentWrapper>
//                     </div>
//                 )}
//     </AppBar>

//   )
// }

// export default Header