import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,

  p: 4,
};

function PayModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bg-blue-300 text-center rounded-lg text-[ #fff] items-center h-full mt-5'>
      <Button onClick={handleOpen} color='white'>Book ticket</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontSize:"700", alignItems:"center"}}>
          Thanks  For The Order
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
Vulputate morbi magna interdum vitae. Aliquet sit aenean tortor eget risus. Nisl, dictum egestas convallis commodo, scelerisque sed ullamcorper. At semper orci nisl felis platea. Tellus donec vitae placerat malesuada habitasse. Tortor tempor sagittis, cursus tortor. Habitant dapibus ac feugiat dignissim eu tellus, tincidunt. Dolor duis urna, nunc massa sed proin risus sed. Amet commodo volutpat amet nunc lectus nisi, at. Adipiscing condimentum in nulla velit urna justo, non duis. Nibh sed eget sed adipiscing nunc, ut auctor nullam. Elit ipsum, leo aliquet mauris elementum est. Commodo eget sagittis id eu, tellus in at.
A tempor arcu, diam id vulputate orci, lobortis. Est enim massa egestas vel id nisl gravida. Sed sed urna, non sit. Scelerisque lacus eu, faucibus sed proin cursus. Interdum vulputate nullam etiam maecenas urna, cursus. Iaculis.
          </Typography>
          <Typography className='flex justify-end gap-4 mt-3'>
      <Button variant="outlined" >Close</Button>
            <Button variant="contained">Action</Button>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default  PayModal;