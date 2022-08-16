import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Alert, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { sendToggle } from '../actions/toggleActions';
import axios from "axios";
import CustomizedSwitches, { BasicSwitch } from '../components/MuiSwitch';
import ProfileCard from '../components/ProfileCard';
import { Typography } from '@mui/material';

function DashboardScreen() {
const style = {
  backgroundColor:'#F5F5F5',
  height:'430px'
  
}
const cardStyle ={
  height:'270px'
}

  return (
      <Container>     
        <Row style={cardStyle}>
            <Col className="mb-5  text-center justify-content-center">     
                <ProfileCard />
            </Col>
        </Row>

        <Row  style={style}>
        
        <Col className="my-5 py-5 text-center">
            <CustomizedSwitches
             />
             <Typography variant='body' sx={{color:'#1E8582', fontWeight:500}}>Toggle your mood</Typography>
        </Col>
        
        </Row>
       
      </Container>
      
  )
}

export default DashboardScreen
