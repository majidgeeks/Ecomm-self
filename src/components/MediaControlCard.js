import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ReactStars from "react-stars";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';




export default function MediaControlCard({detail}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 250, objectFit: "contain" }}
        image={detail.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {detail.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {detail.description}
          </Typography>

          <Chip label={detail.category} variant="outlined" />
          <ReactStars
          edit={false}
          value={detail.rating.rate}
          count={5}
          size={18}
          color2={"#ffd700"}
        />
        <Typography variant="h6" color="text.secondary" component="div">
            {detail.price}
          </Typography>

          <Button style={{backgroundColor:'#8bc34a', color:"#fff", marginTop:5 }} size="small">ADD TO CART</Button>

          <Button 
         className="view-detail-btn" style={{marginTop:5, marginLeft:5}} size="small">BUY NOW</Button>
          
        </CardContent>
        
      </Box>
      
    </Card>
  );
}