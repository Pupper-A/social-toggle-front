import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


function Footer() {
  const [value, setValue] = React.useState('profile');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ width:"100%" , position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                {/* <Col className='text-center py-3'>Copyright &copy; ToggleMedia</Col> */}
            
      <BottomNavigation
         value={value}
         onChange={handleChange}
         position='fixed'

         sx={{
          "& .Mui-selected, .Mui-selected > svg": {
            color: "#007A78",
            
          },
          "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
            backgroundColor: "#F0F0F0",
            bottom: 0,
          }
      }}

         
      >
          <BottomNavigationAction
          component={Link}
          to='/profile'
          label='Profile'
          icon={<AccountCircleIcon />}
          value='profile'
          
           />
          <BottomNavigationAction
          component={Link}
          to='/'
          label='Chart'
          icon={<PieChartIcon />}
          value='chart'
          />
          <BottomNavigationAction
          component={Link}
          to='/people'
          label='Explore'
          icon={<SearchIcon />}
          value='explore'
           />
          <BottomNavigationAction
          component={Link}
          to='/stats'
          label='Feed'
          icon={<PeopleIcon />}
          value='feed'
           />
      </BottomNavigation>
            
            
        
    </Paper>
  )
}

export default Footer
