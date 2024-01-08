import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MediaControlCard from './MediaControlCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #8bc34a',
  boxShadow: 24,
  padding: 0,
  borderRadius: 20

};

export default function BasicModal({handleClose, open, detail}) {
  
  

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MediaControlCard detail={detail}/>
        </Box>
      </Modal>
    </div>
  );
}