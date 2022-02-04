import React from 'react';
import{ Card,CardContent} from '@mui/material';
import "./HomeComponent4.css"

             
const image_box =[
    {"image":"1"},
    {"image":"2"},
    {"image":"3"}
  ]                   
  
const HomeComponent4 = () => {
  return  <div className='nftSpace_body4'>
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
  <div className='neon_game_div'>
  <p>Neon Game Colection</p>
  <div className='neon_game_div2'>
  <img  className="neon_game_image" src="/assets/Path4230.png" alt="no img"/>
  <p>Arun Prasath</p>
  </div>
  </div>
  
  </div>      
        </>
        )})}
       </>
   )}})()}
</div>

</div> 
};

export default HomeComponent4;
