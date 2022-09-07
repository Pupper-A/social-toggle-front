import { Button, CssBaseline, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { Row, Col, Alert } from 'react-bootstrap';
import redDown from '../images/red-down.png'
import { Container } from '@mui/system';


const SignupScreen = (location) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const history = useNavigate();

    const redirect = location.search ? location.search.split("=")[1] : "/"

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)

    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        // if (password != confirmPassword) {
        //     console.log("Passwords do not match!")
        // } else 
        // if (first_name.trim() == "") {
        //     console.log("First name can not be blank!")
        // } else if (last_name.trim() == "") {
        //     console.log("Last name can not be blank!")
        // } else 
        if (username.trim() == "") {
            console.log("Username can not be blank!")
        } else if (password.length < 8) {
            console.log("Password must be at least 8 characters!")
        } else {
            dispatch(register(first_name, last_name, username, email, avatar, password))
        }
    }


    return (
        <Container component="main" sx={{
            backgroundColor: '#FFFFFF',
            display: 'flex',
            padding: 0,
            width: '100vw',
            maxWidth:505,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', width: 280, position: 'sticky' }}>
                <Typography variant='h4'
                    sx={{
                        marginRight: '46.11vw',
                        marginBottom: '9vh',
                        paddingTop: '5.87vh',
                        color: '#D8295E',
                        textTransform: 'none',
                        top: 47,
                        left: 43

                    }}>
                    Create Account
                </Typography>
            </div>

            <img src={redDown} />
            <form className='signup-form' onSubmit={submitHandler}>
                <TextField
                    required
                    label='Username'
                    placeholder='Username'
                    autoComplete='username'
                    type='username'
                    variant='outlined'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ width: 272 }}
                >

                </TextField>
                <TextField
                    required
                    label='Email'
                    placeholder='Email'
                    autoComplete='email'
                    type='email'
                    variant='outlined'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ width: 272 }}
                >

                </TextField>
                <TextField
                    id='password'
                    required
                    label='Password'
                    placeholder='Password'
                    autoComplete='password'
                    variant='outlined'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ width: 272, gap: 16 }}

                >

                </TextField>
                <Button
                    type='submit'
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
                    }}
                > Sign up
                </Button>
            </form>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 5, paddingBottom: 66 }}>
                <Typography variant='subtitle2' textTransform='none'> Already a user?</Typography>
                <Typography variant='subtitle2' textTransform='none' color='#1E8582' component={Link} to='/login'> Login</Typography>
            </div>
            <CssBaseline />
        </Container>

    )
}

export default SignupScreen