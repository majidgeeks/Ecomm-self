import DrawerAppBar from "./AppBar";
import React, {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import CartContext from "../context/cart";
import axios from "axios";





const CheckOut = () => {
  
  const[name, setName] = useState();
  const[address, setAddress] = useState();
  const[email, setEmail] = useState();
  const[contact, setContact] = useState();

  const {cart} = useContext(CartContext);
  

  const placeOrder = () => {

    const user = {
      name,
      address,
      email,
      contact
    }

    axios.post("http://localhost:3000/order",{
      user,
      cart
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }



    return(

        <div>
            <DrawerAppBar />

                <h1>CHECKOUT</h1>

            <div style={{display:"flex",  justifyContent:"center", alignItems:"center", gap:5}}>


            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50%' },
      }}
      noValidate
      autoComplete="off"
    >

<TextField value={name} onChange={(e)=> setName(e.target.value)} className=''
          required
          id="outlined-required"
          label="Full Name"
          
        />
        <TextField value={address} onChange={(e)=> setAddress(e.target.value)}
          required
          id="outlined-required"
          label="Address"
          
        />
        <TextField value={email} onChange={(e)=> setEmail(e.target.value)}
          required
          id="outlined-required"
          label="Email"
          
        />
        <TextField value={contact} onChange={(e)=> setContact(e.target.value)}
          required
          id="outlined-required"
          label="Contact"  
        
        />

<Button onClick={placeOrder}  style={{backgroundColor:'#8bc34a', color:"#fff", width:'51%', marginTop:10, height:30 }} size='medium' >PLACE ORDER</Button>
    </Box>

            </div>

          
      
      
        </div>
    )


};

export default CheckOut;