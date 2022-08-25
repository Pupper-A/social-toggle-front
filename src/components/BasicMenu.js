import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl]=React.useState(null)

    const handleClose = () => {
        setAnchorEl(null)
    }

    const openMenu = (event)=>{
        setAnchorEl(event.currentTarget)
    }
    return (
    <div>
        <Button
        disableRipple
        onClick={openMenu}
        sx = {{position:'fixed', paddingTop: '23px', paddingRight: '22px', width:'100%', justifyContent:'flex-end', color:"#1E8582"}}
        >
            <MenuRoundedIcon style={{fontSize:'2rem'}} />

        </Button>
        <Menu
            id='menu'
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx = {{borderRadius:'80%'}}
            
            
        >
                <MenuItem onClose={handleClose} >Login</MenuItem> 
                <MenuItem onClose={handleClose}>Like</MenuItem> 
                <MenuItem onClose={handleClose}>Comment</MenuItem> 
        </Menu>
    </div>
    );
}
