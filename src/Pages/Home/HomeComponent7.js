import React from 'react';
import {Card,CardActions,CardContent,Typography,Button} from '@mui/material';
import "./HomeComponent7.css"

const HomeComponent7 = () => {
  return   <div className='nftSpace_Contact'>
  <h1>Used By Creative Teams At</h1>
  <div className='nftSpace_Contact_head'>
  <h5>coinbase</h5>
  <h5>a16z</h5>
  <h5>Paradigm</h5>
  <h5>POLYCHAIN CAPITAL</h5>
  </div>
  <div className='nftSpace_Contact_body'>
  <Card  className="nftSpace_collection" sx={{ minWidth: 275 }}>
  <CardContent>
  <Typography  variant='h5' color="#ffffff" gutterBottom>
     NFTSPACE
  </Typography>
  <Typography sx={{ fontSize: 12 }} color="#CCD2EB">
           Fuel the rise of NFT Economy 
  </Typography>
  </CardContent>
  <CardActions>
  <Button className="nftSpace_collection_button" size="small">Create Free Store</Button> 
  </CardActions>
  </Card>
  <ul>
    <h5>About</h5>
    <li>About Us</li>
    <li>Terms of Service</li>
    <li>Privacy Policy</li>
  </ul>
  <ul>
    <h5>Support</h5>
    <li>Create Store</li>
    <li>Customize Store</li>
    <li>Create NFT</li>
    <li>Sell NFT</li>
    <li>Help Center</li>
  </ul>
  <ul>
    <h5>CONTACT US</h5>
    <li>Submit a ticket</li>
  </ul>
  </div>
   </div>
};

export default HomeComponent7;
