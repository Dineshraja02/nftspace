import React from 'react';
import "./nftspace.css";
import Card from '@mui/material/Card';
import NftspaceSidebar from './nftspace_Sidebar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const marks = [
  {
    value: 0,
    label: '0ETH',
  },
  {
    value: 100,
    label: '100 ETH',
  },
];

function valuetext(value) {
  return `${value/10}rem`;
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const Nftspace = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const special_Item =[
                        {"image":"/assets/iron_man_neon.png","alt":"ironman"},
                        {"image":"/assets/zach-key-rKE6rXOl14U-unsplash.png","alt":"ironman"},
                        {"image":"/assets/simon-sigal-neon-city-girl-portrait-test9-glitch.png","alt":"ironman"},
                        {"image":"/assets/505059481813013291.png","alt":"ironman"},
                        {"image":"/assets/386244803572461403.png","alt":"ironman"},
                        {"image":"/assets/eS0NdoE1Cf_jAo20dwWaEb8URADxm5i6AHb62lB47AQ.png","alt":"ironman"}
                      ]
              
const image_box =[
  {"image":"1"},
  {"image":"2"},
  {"image":"3"}
]                   
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
        </div>
        <div className='nftSpace_body3'>
            <h3>Find Your Special Items</h3>
        </div>
        <div className='nftSpace_body3_content'>
          <div className="nftSpace_body3_top"> 
          <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={0.1}
        marks={marks}
        valueLabelDisplay="on"
      />
       <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p>CHAINS</p>
          <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          </div>
        <div className='nftSpace_body3_special'>
  {(()=>{
      if(special_Item.length !==0) {
      return(     
        <>  
        {special_Item.map((data,index)=>{
                 return(
                <>
      <Card   className='nftSpace_body3_specialcard1' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image={data.image}
        alt={data.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Abstraction #324
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Faces
        </Typography>
      </CardContent>
      <hr/>
      <Typography gutterBottom variant="h5" component="div">
          $88 Lowest Ask
        </Typography>
    </Card>
    </>
     )})}
    </>
)}})()}
            </div>
        </div>
          <div className='nftSpace_body4'>
            <h3>Hot Collections</h3>
            <p>Collect the top nft digital artwork from top rated artist</p>
          <div className='nftSpace_body3_imagebox1'>
          {(()=>{
      if(image_box.length !==0) {
      return(     
        <>  
        {image_box.map((data,index)=>{
                 return(
                  <>
            <div className='nftSpace_body3_imagebox'>
             <Card className="nftSpace_imagebox1" sx={{ minWidth: 275 }}>
            <CardContent>
            </CardContent>
            </Card>
            <div className='nftSpace_body3_imagebox1'>
            <Card className="nftSpace_imagebox2" >
            <CardContent>
            </CardContent>
            </Card>
            <Card className="nftSpace_imagebox3" >
            <CardContent>
            </CardContent>
            </Card>
            <Card className="nftSpace_imagebox4">
            <CardContent>
            </CardContent>
            </Card>
            </div>
            </div>      
                  </>
                  )})}
                 </>
             )}})()}
              
          </div>
          </div>
          <div className='nftSpace_body5'>
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
        <div className='nftSpace_body6'>
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
         Arun 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Faces
        </Typography>
      </CardContent>
    </Card>
        </div>
        <div>
      <Card   className='nftSpace_body3_specialcard3' sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="180"
        image="/assets/neon-wallpaper-200818153059501440x900.png"
        alt="neon-wallpaper"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Abstraction #324
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Faces
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
        <div>
        </div>
        <div className='nftSpace_Contact'>
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
         </div>
};

export default Nftspace;
