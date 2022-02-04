import React from 'react';
import {OutlinedInput, InputLabel,MenuItem, ListItemText
  , FormControl,Select,Checkbox,Slider,TextField,CardMedia,Card,CardContent,Typography} from '@mui/material';
  import ListIcon from '@mui/icons-material/List';
import "./HomeComponent3.css";




const special_Item =[
    {"image":"/assets/iron_man_neon.png","alt":"ironman"},
    {"image":"/assets/zach-key-rKE6rXOl14U-unsplash.png","alt":"ironman"},
    {"image":"/assets/simon-sigal-neon-city-girl-portrait-test9-glitch.png","alt":"ironman"},
    {"image":"/assets/505059481813013291.png","alt":"ironman"},
    {"image":"/assets/386244803572461403.png","alt":"ironman"},
    {"image":"/assets/eS0NdoE1Cf_jAo20dwWaEb8URADxm5i6AHb62lB47AQ.png","alt":"ironman"}
  ]

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
const HomeComponent3 = () => {

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
  
  return ( 
<div className='nftSpace_body3'>
<h3>Find Your Special Items</h3>
    <div className='nftSpace_body3_content'>
      <div className="nftSpace_body3_top"> 
        <FormControl sx={{ m: 1, width: 300 }}>
        <Slider
          aria-label="Always visible"
          defaultValue={80}
          getAriaValueText={valuetext}
          step={0.1}
          marks={marks}
          valueLabelDisplay="on"
          />
        <InputLabel id="demo-multiple-checkbox-label1"><ListIcon id='LabelIcon'/> Category</InputLabel>
        <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="logo Category" />}
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
        <TextField id="outlined-basic" label='Buy Now' variant="outlined" />
        <p id='nftSpace_body3_p'>CHAINS</p>
        <Select
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput />}
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
</div>
  )
};

export default HomeComponent3;
