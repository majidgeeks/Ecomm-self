import DrawerAppBar from "./AppBar";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";





const CheckOut = () => {
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

<TextField className=''
          required
          id="outlined-required"
          label="Full Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Contact"  
          defaultValue="Hello World"
        />

<Button  style={{backgroundColor:'#8bc34a', color:"#fff", width:'51%', marginTop:10, height:30 }} size='medium' >PLACE ORDER</Button>
    </Box>

            </div>

          
      
      
        </div>
    )


};

export default CheckOut;