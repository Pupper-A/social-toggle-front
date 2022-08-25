
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, CssBaseline, Skeleton, Typography } from '@mui/material';
import './myStyles.css';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';




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

            
            <Button className='mui-btn' variant='contained' component={Link} to="/profile"
                sx={{ borderRadius: 30, backgroundColor:'#1E8582', margin:'13px', boxShadow:'0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'
                ,
                '&:hover':{
                  backgroundColor:'#1E8582',
                  color:'#FFFFFF'
                  
                }}}
                >Edit profile
            </Button>
                      
        </div>
    </>
  )
}

export default ProfileCard