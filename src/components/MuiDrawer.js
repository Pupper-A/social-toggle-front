import { Drawer, Box, Typography, IconButton } from '@mui/material';
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
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
          role="presentation"
          onClick={()=> setIsDrawerOpen(false)}
          onKeyDown={()=> setIsDrawerOpen(false)}
        >
          <List sx={{paddingBottom:57}}
          subheader={
            <ListSubheader style={boxStyle} component="div" id="nested-list-subheader">
                Contact Us
            </ListSubheader>
          } >
            {['Pupper', 'Linkedin', 'Email'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Sign out', 'Delete Account'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
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
            <MenuRoundedIcon style={{fontSize:'2rem'}} />

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
