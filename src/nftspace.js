import React from 'react';
import "./nftspace.css";
import Card from '@mui/material/Card';
import NftspaceSidebar from './nftspace_Sidebar';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { maxHeight } from '@mui/system';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Nftspace = () => {
  return <div>
         <NftspaceSidebar />
        <div className='nftSpace_body'>
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
        <div className='nftSpace_body2'>
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
        <Card className="nftSpace_card4"  sx={{ minWidth: 275 }}>
            <CardContent>
            </CardContent>
        </Card><Card className="nftSpace_card5"  sx={{ minWidth: 275 }}>
            <CardContent>
            </CardContent>
        </Card><Card className="nftSpace_card6"  sx={{ minWidth: 275 }}>
            <CardContent>
            </CardContent>
        </Card>
        </div>
        </div>
        <div className='nftSpace_body3'>
            <h3>Find Your Special Items</h3>
        </div>
        <div>
            <div className='nftSpace_body3_special'>
    <Card   className='nftSpace_body3_specialcard1' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image="/assets/iron_man_neon.png"
        alt="ironman"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
      </CardContent>
      <hr/>
      <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
    </Card>
    <Card className='nftSpace_body3_specialcard1' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image="/assets/iron_man_neon.png"
        alt="ironman"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
      </CardContent>
      <hr/>
      <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
    </Card>
    <Card className='nftSpace_body3_specialcard1' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image="/assets/iron_man_neon.png"
        alt="ironman"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
      </CardContent>
      <hr/>
      <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
    </Card>
    <Card className='nftSpace_body3_specialcard1' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image="/assets/iron_man_neon.png"
        alt="ironman"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
      </CardContent>
      <hr/>
      <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
    </Card>
    <Card className='nftSpace_body3_specialcard1' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image="/assets/iron_man_neon.png"
        alt="ironman"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
      </CardContent>
      <hr/>
      <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
    </Card>
    <Card className='nftSpace_body3_specialcard1' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image="/assets/iron_man_neon.png"
        alt="ironman"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards 
        </Typography>
      </CardContent>
      <hr/>
      <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
    </Card>
            </div>
        </div>
         </div>;
};

export default Nftspace;
