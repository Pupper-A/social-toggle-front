import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { sendToggle } from '../actions/toggleActions';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { profile } from '../actions/profileActions';



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 104,
    height: 62,
    marginBottom: 18,
    padding: 12.7,
    '& .MuiSwitch-switchBase': {
        // color: '#1E8582',
        margin: 17,
        padding: 0,
        transform: 'translateX(0px)',
        transition: '.3s cubic-bezier(0.42, 0, 0.21, 1.3)',
        '&.Mui-checked': {
            color: '#1E8582',
            transform: 'translateX(35px)',
            transition: '.3s cubic-bezier(0.42, 0, 0.21, 1.3)',

        },



    },
    '& .MuiSwitch-thumb': {
        width: 35.86,
        height: 35.86,

        boxShadow: '0px 3px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'

    },
    '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        backgroundColor: '#1E8582',
        borderRadius: 17.93,
    },
    '& .MuiSwitch-track': {
        // backgroundColor: '#1E8582',
        borderRadius: 17.93,
        height: 25.1,
        margin: 10,

    },


}));

export default function ToggleSwitch() {
    const [isPrivate, setIsPrivate] = useState("");
    const [isToggled, setIsToggled] = useState("");

    const dispatch = useDispatch();

    const handleChange = () => {
        setIsPrivate(!isPrivate);


    }


    return (
        <>
            {/* <p>  {isPrivate ? <span >You are Private</span> : <span>You are not private</span>}</p> */}
            <MaterialUISwitch

                checked={isPrivate}
                onClick={handleChange}
                sx={{ justifyContent: 'center' }}
            />


        </>
    );
}



