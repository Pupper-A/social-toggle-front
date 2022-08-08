import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { sendToggle } from '../actions/toggleActions';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Typography } from '@mui/material';




const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 107.86,
  height: 60,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    color: '#340546',
    margin: 5,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#F76E09',
      transform: 'translateX(49px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 50,
    height: 50,
  },
  '& .css-ars20s-MuiButtonBase-root-MuiSwitch-switchBase.Mui-disabled': {
    color: '#340546'
  },
  '& .css-ars20s-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked.Mui-disabled': {
    color: '#F76E09'
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#F76E09',
    borderRadius: 100 / 2,
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#340546',
    borderRadius: 100 / 2,
  },

}));

export default function CustomizedSwitches() {
  const [isToggled, setIsToggled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [seconds, setSeconds] = useState(0);
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

  //DISABLES TOGGLE FOR 10 SECONDS//
  const disableTime = () => {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 10000)
  }


  //RESETS TIMER
  function reset() {
    setSeconds(0);

  }
  //TOGGLES THE SWITCH AND RESETS TIME ON EVERY TOGGLE
  const onToggle = () => {
    reset();
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

    // async function getToggleInfo() {
    //   const config = {
    //     headers: {
    //       "Authorization": token
    //     }
    //   }

    //   await axios.get("/api/users/toggle/", config).then((response) => {
    //     if (response.data) {
    //       a = new Date(response.data.toggled_time)
    //       setIsToggled(response.data.is_toggled)

    //     } else if (!localStorage.getItem("userInfo")) {
    //       redirect = "/"
    //       history(redirect)
    //     } else {
    //       redirect = "/new-user"
    //       history(redirect)
    //     }

    //   })
    // }

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
  }, [loading, isToggled])



  // //IGNORE THIS
  // useEffect(() => {
  //   let interval = null;
  //   if (isToggled || !isToggled) {
  //     // console.log(Date());


  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds + 1);
  //     }, 1000);
  //     // localStorage.setItem('seconds', JSON.stringify(seconds))
  //     // localStorage.setItem('mood', JSON.stringify(isToggled))
  //   }
  //   return () => clearInterval(interval);
  // }, [isToggled, seconds])


  return (
    <Box>
      <Typography variant='body1'>
        {isToggled ? <span >You are Happy</span> : <span>You are Sad</span>}
      </Typography>
      <MaterialUISwitch
        defaultChecked color="warning"
        checked={isToggled}
        onClick={onToggle}
        onChange={disableTime}
        disabled={disabled}
        sx={{ justifyContent: 'center' }} />
      <p>
        {/* {seconds} seconds */}
        <br />
        <p>{date && (date < 60 ? date + " Minutes" : Math.round(date / 60) + " Hours")}</p>

      </p>


    </Box>
  );
}



