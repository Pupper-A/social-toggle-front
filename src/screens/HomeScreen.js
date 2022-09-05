import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, CssBaseline, SvgIcon, Typography } from '@mui/material';
import '../components/myStyles.css';
import Balool from '../images/balool-t.png';
import Ellipse from '../images/Ellipse.png';
import Rectangle from '../images/Rectangle.png';
import { ReactComponent as up } from '../images/up.svg';
import { ReactComponent as down } from '../images/down.svg';
import { Container } from '@mui/system';






function HomeScreen() {
    const history = useNavigate();

    let redirect = ""

    const userInfo = localStorage.getItem("userInfo")

    useEffect(() => {
        if (userInfo) {
            let token = "Bearer " + JSON.parse(userInfo).token

            console.log(token)

            const config = {
                headers: {
                    "Authorization": token
                }
            }

            //If user is logged in, we send a get request to 
            //back and get the latest mood of the user
            axios.get("/api/users/toggle/", config).then((response) => {

                //If we get our data we can pass user to dashboard
                if (response.data) {
                    redirect = "/dashboard"
                    localStorage.setItem("toggleInfo", JSON.stringify(response.data))
                    history(redirect)

                    //Else we send user to new-user page to save first mood
                } else {
                    redirect = "/new-user"
                    history(redirect)
                }

            })
        }
    }, [history, userInfo, redirect])


    return (
        <Container component="main" sx={{ backgroundColor: '#FFFFFF', padding: 0 }}>
            <CssBaseline />

            {/* balool */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: '29.1vh',
                zIndex: '-1'

            }}>
                <img src={Balool} />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '5.65vh',
                paddingBottom: '28.25vh',
                alignItems: 'center',


            }}>
                <SvgIcon component={up} inheritViewBox sx={{ marginLeft: '45px', marginRight: '16px', width: 20 }} />
                <Typography
                    variant='h5'
                    sx={{
                        fontSize: 23,
                        color: '#6C6C6C',
                        display: 'flex',
                        justifyContent: 'center',
                        textTransform: "none"
                    }}
                >

                    Toggle your mood

                </Typography>
                <SvgIcon component={down} inheritViewBox sx={{ marginRight: '45px', marginLeft: '16px', width: 20 }} />



            </div>
            <div className='home-btns'>
                <Button
                    // className='home-login-btn'
                    component={Link}
                    to='/login'
                    variant='contained'
                    sx={{
                        borderRadius: 68,
                        backgroundColor: '#1E8582',
                        textTransform: "none",
                        width: '272px',
                        height: '42px',
                        '&:hover': {
                            backgroundColor: '#1E8582',
                            color: '#FFFFFF',
                            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'

                        }
                    }}
                >
                    Log in
                </Button>
                <Button
                    component={Link}
                    to='/signup'
                    variant='contained'
                    sx={{
                        borderRadius: 68,
                        backgroundColor: '#D8295E',
                        textTransform: "none",
                        width: '272px',
                        height: '42px',
                        '&:hover': {
                            backgroundColor: '#D8295E',
                            color: '#FFFFFF',
                            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'

                        }
                    }}>
                    Sign up
                </Button>
            </div>



        </Container>
    )
}

export default HomeScreen