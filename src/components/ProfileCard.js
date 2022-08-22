
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, CssBaseline, Typography } from '@mui/material';
import './myStyles.css';
import { Box } from '@mui/system';




const ProfileCard = () => {
  return (
    <>
        <div className='profile'>
            <Avatar
            sx={{
                width: '104px',
                height: '104px',
                color:'#1E8582',
                background: '#F0F0F0',
                margin:'0',
                justifyContent:'center',
            }}>
                <PersonIcon
                sx={{
                    width:60.2,
                    height:60.2
                }} />
            </Avatar>
            <div className='subtitle'>
                <Typography variant='avatarLetter' fontSize='20px'>Neverhood</Typography>
                <Box className='follow'>
                        <Typography variant="subtitle2"  fontSize='14px'  component="div">
                            60 Following
                        </Typography>
                        <Typography variant="subtitle2" fontSize='14px'  component="div">
                            2 Followers
                        </Typography>
                </Box>
            </div>

            
            <Button className='mui-btn' variant='contained' 
                sx={{ borderRadius: 30, backgroundColor:'#1E8582', margin:'16px'
                ,
                '&:hover':{
                  backgroundColor:'#1E8582'
                  
                }}}
                >Edit profile
            </Button>
                      
        </div>
    </>
  )
}

export default ProfileCard