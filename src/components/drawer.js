import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AlignItemsList from './CartList';


export default function TemporaryDrawer({open, setOpen, cardData}) {
  


  return (
    <div>
      
        <React.Fragment >
          
          <Drawer
            anchor="right"
            open={open}
            onClose={()=>setOpen(false)}
            // onClose={toggleDrawer(anchor, false)}
          >
            <Box
      
      role="presentation"
      
    ></Box>
           <AlignItemsList cardData={cardData}/> 
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}