import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export const BottomNav = () => {
    const [value, setValue] = React.useState('Profile');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <Paper sx={{ width:"100%" , position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
              
        <BottomNavigation
           value={value}
           onChange={handleChange}
           position='fixed'
           zIndex="1100"
           sx={{
            "& .Mui-selected, .Mui-selected > svg": {
              color: "#1E8582",
              
            },
            "& .MuiBottomNavigationAction-root": {
              backgroundColor: "#F0F0F0",
              color:'black',
              width:"100%"
            },
            '& .Mui-selected':{
              color: "#1E8582",

            }
        }}
  
           
          > 
            <BottomNavigationAction
            component={Link}
            to='/dashboard'
            icon={<PeopleIcon />}
            value='feed'
            />
            
            <BottomNavigationAction
            component={Link}
            to='/stats'
            icon={<PieChartIcon />}
            value='chart'
            />
            {/* <BottomNavigationAction
            component={Link}
            to='/people'
            label='Explore'
            icon={<SearchIcon />}
            value='explore'
             /> */}
             <BottomNavigationAction
            component={Link}
            to='/dashboard'
            icon={<AccountCircleIcon />}
            value='profile'
            
             />
          
        </BottomNavigation>
              
              
          
      </Paper>
    )
}
