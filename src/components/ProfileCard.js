
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Button, CssBaseline, Skeleton, Typography } from '@mui/material';
import './myStyles.css';
import { Box } from '@mui/system';





const ProfileCard = () => {
    const [userName, setUserName] = useState("")
    const [currentAvatar, setCurrentAvatar] = useState('')

    const history = useNavigate();
    const userSelector = useSelector(state => state.profile)

    const { error, loading, userInfo } = userSelector

    const dispatch = useDispatch()

    let redirect = ""

    let token = null
    const user = localStorage.getItem("userInfo")

    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
            const user = JSON.parse(localStorage.getItem("userInfo"))

            token = "Bearer " + user.token
            setUserName(user.username)
            setCurrentAvatar(user.avatar)



        } else {
            redirect = "/"
            history(redirect)
        }
    }, [userInfo])
    return (
        <>
            <div className='profile'>
                <Avatar
                    sx={{
                        width: '104px',
                        height: '104px',
                        color: '#1E8582',
                        background: '#F0F0F0',
                        margin: '0',
                        justifyContent: 'center',
                    }}>
                    {<img defaultValue={<PersonIcon
                        sx={{
                            width: 60.2,
                            height: 60.2
                        }} />} src={currentAvatar} width={111} />}


                </Avatar>

                <div className='subtitle'>
                    <Typography variant='avatarLetter' fontSize='20px'>{userName}</Typography>

                    <Box className='follow'>

                        <Typography variant="subtitle2" fontSize='14px' component="div">
                            60 Following
                        </Typography>

                        <Typography variant="subtitle2" fontSize='14px' component="div">
                            2 Followers
                        </Typography>
                    </Box>
                </div>


                <Button variant='contained' size='medium' component={Link} to="/profile"
                    sx={{
                        borderRadius: 30, backgroundColor: '#1E8582', marginTop: '16px', boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'
                        ,
                        '&:hover': {
                            backgroundColor: '#1E8582',
                            color: '#FFFFFF',
                            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'

                        },
                        '& .MuiButton-root': {
                            width: 'auto'
                        }
                    }}
                >Edit profile
                </Button>


            </div>
        </>
    )
}

export default ProfileCard