import React from 'react';
import {CardMedia,Card,CardActions,CardContent,Typography,Button} from '@mui/material';
import "./HomeComponent6.css"

const HomeComponent6 = () => {
  return  <div className='nftSpace_body6'>
  <div>
<Card   className='nftSpace_body3_specialcard2' sx={{ maxWidth: 345}}>
<CardMedia
  component="img"
  height="200"
  image="/assets/purple-neon-2021-08-30-17-35-16-utc.png"
  alt="purple-neon"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
   Arun Prasath 
  </Typography>
  <Typography variant="body2" color="text.secondary">
   @arunprasath
  </Typography>
</CardContent>
</Card>
  </div>
  <div>
<Card   className='nftSpace_body3_specialcard3' sx={{ maxWidth: 345}}>
<CardMedia
  component="img"
  height="200"
  image="/assets/neon-wallpaper-200818153059501440x900.png"
  alt="neon-wallpaper"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  Sai Siddharth
  </Typography>
  <Typography variant="body2" color="text.secondary">
    @saisiddharth
  </Typography>
</CardContent>
</Card>
  </div>
  <Card  className="nftSpace_collection" sx={{ minWidth: 275 }}>
  <CardContent>
  <Typography  variant='h5' color="#ffffff" gutterBottom>
     List Your NFTS On NFTSPACE
  </Typography>
  <Typography sx={{ fontSize: 12 }} color="#CCD2EB">
            Are you an NFT Artist creator? Contact us to get your DIgi-Art on NFTSPACE!
  </Typography>
  </CardContent>
  <CardActions>
  <Button className="nftSpace_collection_button" size="small">I am an Artist</Button> 
  <Button className="nftSpace_collection_button" size="small">Project Creator</Button>
  </CardActions>
  </Card>
  </div>
};

export default HomeComponent6;
