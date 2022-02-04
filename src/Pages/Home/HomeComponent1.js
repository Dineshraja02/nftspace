import React from 'react';
import {Card,CardContent} from '@mui/material';
import "./HomeComponent1.css"

const HomeComponent1 = () => {
  return <div className='nftSpace_body'>
  <h3 className="nftSpace_Heading">Discover Unique & Rare Digital Art NFT Marketplace</h3>
  <br/>
  <div className='nftSpace_card'>
  <Card className="nftSpace_card1" sx={{ minWidth: 275 }}>
      <CardContent>
      </CardContent>
  </Card>
  <Card className="nftSpace_card2"  sx={{ minWidth: 275 }}>
      <CardContent>
      </CardContent>
  </Card>
  <Card className="nftSpace_card3" sx={{ minWidth: 275 }}>
      <CardContent>
      </CardContent>
  </Card>
  </div>
  </div>
};

export default HomeComponent1;
