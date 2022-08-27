import React from 'react';
import { Row, Col, Alert, Container } from 'react-bootstrap';
import CustomizedSwitches, { BasicSwitch } from '../components/MuiSwitch';
import ProfileCard from '../components/ProfileCard';
import { Typography } from '@mui/material';
import { MuiDrawer } from '../components/MuiDrawer';
import { BottomNav } from '../components/BottomNav';

function DashboardScreen() {
const style = {
  backgroundColor:'#F5F5F5',
  // height:'430px',
  marginTop: '54px'
  
}
const cardStyle ={
  height:'314px',
  backgroundColor:'#FFFFFF'
}

  return (
      <Container>  
        
        <MuiDrawer />
        <Row style={cardStyle}>
            <Col className="text-center justify-content-center"
            style={{marginTop:'73px',
            }}>     
                <ProfileCard />
            </Col>
        </Row>

        <Row  style={style}>
        
        <Col className="my-5 py-5 text-center">
            <CustomizedSwitches
             />
             <Typography variant='body1' sx={{color:'#1E8582'}}>Toggle your mood</Typography>
        </Col>
        
        </Row>
       <BottomNav />
      </Container>
      
  )
}

export default DashboardScreen
