import * as React from 'react';
import {Box,AppBar,Toolbar,IconButton,Typography,Button,Menu,MenuItem,InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { styled, alpha } from '@mui/material/styles';
import './nftspace_Sidebar.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const  NftspaceSidebar = () => {
  return <div className='nftspace_Toolbar'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography className="nftSpace_Logo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NFT<span className='iconToken'>SPACE</span>
          </Typography>
          <MenuItem>
                  <Typography textAlign="center">Home</Typography>
            </MenuItem>
            <MenuItem>
                  <Typography textAlign="center">Explore</Typography>
            </MenuItem>
            <MenuItem>
                  <Typography textAlign="center">Sell</Typography>
            </MenuItem>
            <MenuItem>
                  <Typography textAlign="center">Marketplace</Typography>
            </MenuItem>
            <Search className='nftspace_Toolbar_Search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <MenuItem>
                  <Typography textAlign="center"><NotificationsNoneIcon /></Typography>
            </MenuItem>
          <Button className="nftspace_Toolbar_upload" color="inherit">Upload</Button>
          <Button className="nftspace_Toolbar_connect" color="inherit">Connect Wallet</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </div>;
};

export default NftspaceSidebar;

