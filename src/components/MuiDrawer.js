import { Drawer, Box, Typography, IconButton, SvgIcon } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {useState} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListSubheader from '@mui/material/ListSubheader';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import {ReactComponent as PupperIcon} from '../PupperIcon.svg';


export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const boxStyle = {
        paddingLeft:'16px',
        paddingTop:"32px",
        width:'320px',
        textAlign:'left',
    }

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320,
          color:'#1B1B1B',
         }}
          role="presentation"
          onClick={()=> setIsDrawerOpen(false)}
          onKeyDown={()=> setIsDrawerOpen(false)}
        >
          <List sx={{paddingBottom:'56vh'}}
          subheader={
            <ListSubheader style={boxStyle} component="div" id="nested-list-subheader">
                Contact Us
            </ListSubheader>
          } >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SvgIcon component={PupperIcon} inheritViewBox />
                </ListItemIcon>
                <ListItemText primary='Pupper' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LinkedInIcon
                    style={{fill:'#1E8582'}}
                   /> 
                </ListItemIcon>
                <ListItemText primary='LinkedIn' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon
                   style={{fill:'#1E8582'}}
                   />
                </ListItemIcon>
                <ListItemText primary='Email' />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <PersonIcon
                   style={{fill:'#1B1B1B'}}
                   />
                  </ListItemIcon>
                  <ListItemText primary='Sign out' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteIcon
                   style={{fill:'#D8295E'}}
                   />
                </ListItemIcon>
                <ListItemText primary='Delete Account'
                style={{color:'#D8295E'}}
                 />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      );

  return (
    <>
        <IconButton
        disableRipple
        sx = {{position:'fixed', paddingTop: '23px', justifyContent:'flex-end', color:"#1E8582"}}
        onClick={()=> setIsDrawerOpen(true)}
        >
            <MenuRoundedIcon style={{fontSize:'2rem',  width:'36px',height:'36px'}} />

        </IconButton>
        <SwipeableDrawer
        anchor={'left'}
        open={isDrawerOpen}
        onClose={()=>setIsDrawerOpen(false)}
        onOpen={()=>setIsDrawerOpen(false)}
        >

        {list()}
        </SwipeableDrawer>
    </>
  )
}
