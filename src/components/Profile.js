import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, IconButton } from '@mui/material';
import './myStyles.css';
import Username from './Username';
import { Box, Typography } from '@mui/material';



const Profile = () => {
  return (
    
        <div className='profile'>
          <Avatar className='avatar'>
            <PersonIcon />
          </Avatar>
          <p>Neverhood
          </p>
          <Box
          className='px-5 mx-4'
          sx={{ justifyContent:'space-around'}}>
              <Typography variant="subtitle2" gutterBottom component="div">
                  6 Following
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                  6 Followers
              </Typography>
          </Box>
          <Button
          
          variant='contained'  sx={{ borderRadius: 50, backgroundColor:'#1E8582',
          '&:hover':{
            backgroundColor:'#1E8582'
            
          }}}>Edit Profile</Button>
        </div>
        
  )
}

export default Profile