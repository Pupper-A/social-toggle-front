import { Box } from '@mui/system'
import React from 'react';
import { Button, Typography } from '@mui/material';



const Username = () => {
  return (
    <div>
        <p>Neverhood
        </p>
        <Box
        className='avatar px-5 mx-4'
        sx={{display:'flex', justifyContent:'space-around'}}>
            <Typography variant="subtitle2" gutterBottom component="div">
                 6 Following
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                 6 Followers
            </Typography>
        </Box>
        <Button
        
        variant='contained'  sx={{ borderRadius: 50, backgroundColor:'#1E8582'}}>Edit Profile</Button>
    </div>
  )
}

export default Username