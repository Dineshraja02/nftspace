import React from 'react';
import {Card,CardActions,Typography,CardContent,Button} from '@mui/material';
import "./HomeComponent5.css"

const HomeComponent5 = () => {
  return   <div className='nftSpace_body5'>
  <Card  className="nftSpace_collection" sx={{ minWidth: 275 }}>
  <CardContent>
  <Typography  variant='h5' color="#ffffff" gutterBottom>
     The Best Marketplace 
  </Typography>
  <Typography variant="h5" color="#ffffff">
     For NFTSPACE
  </Typography>
  <Typography sx={{ fontSize: 12 }} color="#CCD2EB">
     NFTSPACE is the best marketpalce for the buyers, which are digital
     items you can own.Buy Now or Bid on Your Favorite NFT Artwork and enjoy the assets
  </Typography>
  </CardContent>
  <CardActions>
  <Button className="nftSpace_collection_button" size="small">Explore Digital Art</Button>
  </CardActions>
  </Card>
  <div>
  <Card className="nftSpace_card7" >
      <CardContent>
      </CardContent>
  </Card>
  </div>
  <div>
  <div >
  <Card className="nftSpace_card8"  >
      <CardContent>
      </CardContent>
  </Card>
  </div>
  <div>
    <Card className="nftSpace_card9"  >
      <CardContent>
      </CardContent>
  </Card>
  </div>
  </div>
  </div> 
};

export default HomeComponent5;
