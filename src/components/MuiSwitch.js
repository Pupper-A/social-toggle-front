import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { sendToggle } from '../actions/toggleActions';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';




const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 107.86,
  height: 44.41,
  padding: 9,
  overflow:'visible',
  '& .MuiSwitch-switchBase': {
    color: '#340546',
    margin: 0,
    padding: 0,
    transform: 'translateX(-15px)',
    transition: '0.3s ease-in-out',
    '&.Mui-checked': {
      color: '#F76E09',
      transform: 'translateX(62px)',
      transition: '0.3s ease-in-out',

    },
  },
    '& .MuiSwitch-thumb': {
    width: 63.45,
    height: 63.45,
    
        
  },
  '& .MuiSwitch-input': {
    width: 186,
    height: 121,
    
  },

  '& .css-ars20s-MuiButtonBase-root-MuiSwitch-switchBase.Mui-disabled': {
    color: '#340546'
  },
  '& .css-ars20s-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked.Mui-disabled': {
    color: '#F76E09'
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#F76E09',
    borderRadius: 31.7241,
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#340546',
    borderRadius: 31.7241,
    height:44.41,
  },


}));

export default function CustomizedSwitches() {
  const [isToggled, setIsToggled] = useState("");
  const [disabled, setDisabled] = useState(null);
  const [date, setDate] = useState('')
  const [toggledTime, setToggledTime] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();
  
//We can get the data forwarded from post request action with state from our store
  const userToggle = useSelector(state => state.toggle);

//Then store data infomations tin variables
  const {error, loading, toggleInfo} = userToggle

  let token = null;
  let redirect = "";




  //TOGGLES THE SWITCH AND RESETS TIME ON EVERY TOGGLE
  const onToggle = () => {

    var bool = 0
    setIsToggled(!isToggled);
    if (isToggled == true) {
      bool = 0
    } else {
      bool = 1
    }
    const userId = JSON.parse(localStorage.getItem("userInfo")).id
    dispatch(sendToggle(userId, bool))
  }



  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")

    if (userInfo) {
      token = "Bearer " + JSON.parse(userInfo).token
    } else {
      redirect = "/"
      history(redirect)
    }
    let ToggledTime = null

  //Because we stored toggled data in localStorage
  //we check the data exists in localStorage or not
    if(localStorage.getItem("toggleInfo")){

    //Then we create a date object from localStore info
      let toggleInfo = JSON.parse(localStorage.getItem("toggleInfo"))
      ToggledTime = new Date(toggleInfo.toggled_time)
      
      //We check if there is no error and loading isn't
      //true from posting our request we get toggled info
      //and store it in isToggled state
      if( !error && loading != true ){
        setIsToggled(toggleInfo.is_toggled)
      }
    }

    //Else we check if toggled data isn't in localStorage
    //We redirect user to homeScreen
    //(read comments from this file and then read comments in HomeSceen file)
    else{
      redirect = "/"
      history(redirect)
    }
    // this function checks if its been 10 mins since last toggle, then disable/enables it
    const setDisabledFunc = () => {
      let now = new Date()
      let def = String(Math.round((now - ToggledTime) / 60000))
      if(def<10){
        setDisabled(true);
      }else {
        setDisabled(false);
      }
    } 
    setDisabledFunc()

    // function that store the time between two mood
    const setDateFunc = () => {
      let now = new Date()
      let def = String(Math.round((now - ToggledTime) / 60000))
      
      setDate(def)
     
    }
    
    //call that function 
    setDateFunc()
    
    
    //every 1 minute this update our time with help of setDateFunc
    let interval = setInterval(() => {
      setDateFunc()

    }, 60000);
    return () => clearInterval(interval);

    //We can pass dependecies to useEffect and when
    //one dependency changed the useEffect runs again.
    //We pass loading as dependency because the loading
    //variable talles us when posting the data to back is
    //finished.
  }, [loading, onToggle])




  return (
    <>
      <Typography variant='body1'>
        {isToggled ? <span >You are Happy</span> : <span>You are Sad</span>}
      </Typography>
      <MaterialUISwitch
        id='buttonid'
        defaultChecked color="warning"
        checked={isToggled}
        onClick={onToggle}
        disabled={disabled}
        sx={{ justifyContent: 'center', margin:'38px' }} />
      {/* <p> */}
        {/* {seconds} seconds */}
        <br />
        {/* <p>{date && (date < 60 ? date + " Minutes" : Math.round(date / 60) + " Hours")}</p> */}

      {/* </p> */}


    </>
  );
}



