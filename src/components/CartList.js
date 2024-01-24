import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiSquarePlus,  CiSquareMinus } from "react-icons/ci";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';


export default function AlignItemsList({cardData, deleteCart, updateQty}) {

  
  return (
    <List sx={{ width: '100%', maxWidth: 360,
     bgcolor: 'background.paper' }}>
     {cardData.map((v,i) => {
      return (
      <div key={i} >
        
        < ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img style={{width:70, height:70, objectFit:"contain"}} alt='' src={v.image}/>
        </ListItemAvatar>
        <ListItemText
          primary={v.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                $ {v.price * v.qty} 
              </Typography>
              <Typography style={{display:"flex", justifyContent:"space-around"}}>

              {" Qty :"} <CiSquarePlus onClick={()=> updateQty("+", v.id)} style={{cursor:"pointer"}} size={20}  /> 
               {v.qty} < CiSquareMinus onClick={()=> v.qty > 1 && updateQty("-", v.id)} style={{cursor:"pointer"}} size={20}/> <RiDeleteBin5Line onClick={()=> deleteCart(v.id)} style={{cursor:"pointer"}} color='red' size={22}  />

              </Typography>

              
            </React.Fragment>
            
          }
        />
      </ListItem>
      
      <Divider variant="inset" component="li" />

      </div>
      )
     })}
    
    <Link to={"/checkout"}>
    {cardData.length ? <Button  style={{backgroundColor:'#8bc34a', color:"#fff", width:'100%', marginTop:5, height:30 }} size="small">CHECKOUT</Button> : <Alert variant="filled" severity="warning">
  Cart is empty!
</Alert> }
    </Link>

    </List>

  );
}