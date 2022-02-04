import React from 'react';
import {Card,CardContent,Typography,CardActions,Button} from '@mui/material';
import "./HomeComponent2.css"

const HomeComponent2 = () => {
  return   <div className='nftSpace_body2'>
  <Card  className="nftSpace_collection" sx={{ minWidth: 275 }}>
  <CardContent>
  <Typography  variant='h5' color="#ffffff" gutterBottom>
     Get Popular NFT 
  </Typography>
  <Typography variant="h5" color="#ffffff">
     Collection Here
  </Typography>
  <Typography sx={{ fontSize: 12 }} color="#CCD2EB">
     Collect the top nft digital artworks from top rated artist
  </Typography>
  </CardContent>
  <CardActions>
  <Button className="nftSpace_collection_button" size="small">View Popular Art</Button>
  </CardActions>
  </Card>
  <div className='nftSpace_card4_opt'>
  <Card className="nftSpace_card4"  sx={{ minWidth: 275 }}>
      <CardContent>
      </CardContent>
  </Card>
  </div>
  <div className='nftSpace_card5_opt' >
  <Card className="nftSpace_card5"  sx={{ minWidth: 275 }}>
      <CardContent>
      </CardContent>
  </Card>
  </div>
  <div className='nftSpace_card6_opt' >
    <Card className="nftSpace_card6"  sx={{ minWidth: 275 }}>
      <CardContent>
      </CardContent>
  </Card>
  </div>
  </div>
};

export default HomeComponent2;
