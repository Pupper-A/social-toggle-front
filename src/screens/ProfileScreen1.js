import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Alert, Container, Image } from 'react-bootstrap';
import { Avatar, Box, Button, CssBaseline, Dialog, IconButton, Input, InputAdornment, Switch, Typography } from '@mui/material';
import '../components/myStyles.css';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { profile } from '../actions/profileActions';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { height, width } from '@mui/system';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import DialogActions from '@mui/material/DialogActions';
import PrivateSwitch from '../components/PrivateSwitch';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




const ProfileScreen1 = () => {

    const [id, setId] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [currentAvatar, setCurrentAvatar] = useState('')
    const [color, setColor] = useState('')
    const [isPrivate, setIsPrivate] = useState("");


    const [open, setOpen] = React.useState();


    const history = useNavigate()

    const dispatch = useDispatch()
    const showPassword = 'false'

    const userSelector = useSelector(state => state.profile)

    const { error, loading, userInfo } = userSelector

    const user = localStorage.getItem("userInfo")

    let redirect = ""

    useEffect(() => {
        if (user) {
            const jsonUserInfo = JSON.parse(user)
            setFirstName(jsonUserInfo.first_name)
            setLastName(jsonUserInfo.last_name)
            setUsername(jsonUserInfo.username)
            setEmail(jsonUserInfo.email)
            setCurrentAvatar(jsonUserInfo.avatar)
            setId(jsonUserInfo.id)

        } else {
            redirect = "/"
            history(redirect)
        }

        if (userInfo) {
            setFirstName(userInfo.first_name)
            setLastName(userInfo.last_name)
            setUsername(userInfo.username)
            setEmail(userInfo.email)
            setCurrentAvatar(userInfo.avatar)

            setId(userInfo.id)
        }

    }, [userInfo])

    const submitHandler = (e) => {
        // e.preventDefault()
        setUsername(username.trim())
        setFirstName(first_name.trim())
        setLastName(last_name.trim())
        setPassword(password.trim())
        console.log(password)
        setOpen(false)
        // history('/dashboard')



        // setConfirmPassword(confirmPassword.trim())


        // if(password != confirmPassword){
        //     setMessage("Passwords do not match!")
        //     setColor("danger")

        if (password.length < 8 && password.length > 0) {
            console.log("Password must be at least 8 characters!")
            setMessage("Password must be at least 8 characters!")
            setColor("danger")
        } else {
            dispatch(profile(id, username, first_name, last_name, avatar, password, isPrivate))
            console.log("Your Profile info changed successfuly.")
            setMessage("Your Profile info changed successfuly.")
            setColor("success")
        }
    };

    const handleImageChange = (e) => {
        let newAvatar = avatar;
        newAvatar = e.target.files[0];
        setAvatar(newAvatar);
    };

    // const handleChange = (e) => {
    //     const value = e.target.value
    //     setIsPrivate(value)
    // }

    const handleClickOpen = (e) => {
        setOpen(true);
    };

    const handleClose = (e) => {
        setOpen(false);
        submitHandler()
        history('/dashboard')
    };
    const handleClickShowPassword = () => {

        showPassword = !showPassword

    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };



    const cardStyle = {
        height: '250px',
    }
    const saveBtn = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '40px',
        alignItems: 'center'
    }
    const textFieldStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0 16px',
    }

    return (
        <Container style={{maxWidth:505, margin:'0 auto'}}>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                    <Grid container justify="space-between" alignItems="center">
                        <Typography sx={{ textTransform: 'none' }} >Confirm changes</Typography>

                    </Grid>
                </DialogTitle>
                <DialogContent>
                    Are you pretty sure you want to save this?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} type='submit' variant='contained' disableElevation sx={{
                        backgroundColor: '#D8295E', '&:hover': {
                            backgroundColor: '#D8295E'
                        }
                    }} >
                        Yes
                    </Button>
                    <Button sx={{ color: '#D8295E' }} onClick={handleClose}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
            <form onSubmit={submitHandler}>


                <div style={saveBtn}>
                    <IconButton
                        component={Link}
                        to='/dashboard'
                        sx={{ top: '2.88vh', justifyContent: 'flex-end', color: "#D8295E", padding: '11px' }}
                    >
                        <CloseIcon style={{ fontSize: '2rem', width: '36px', height: '36px' }} />
                    </IconButton>

                    <IconButton
                        // type='submit'
                        onClick={handleClickOpen}
                        sx={{ top: '2.88vh', justifyContent: 'flex-end', color: "#1E8582", padding: '11px' }}
                    >
                        <DoneIcon style={{ fontSize: '2rem', width: '36px', height: '36px' }} />
                    </IconButton>
                </div>

                <Row style={cardStyle}>
                    <Col className="text-center justify-content-center" style={{
                        marginTop: '45px', marginBottom: '45px'
                    }}>
                        <div className='edit-profile'>
                            <Avatar
                                id='avatar'
                                defaultValue={<PersonIcon />}
                                onChange={handleImageChange}
                                sx={{
                                    width: '104px',
                                    height: '104px',
                                    color: '#D8295E',
                                    background: '#F0F0F0',
                                    margin: '0',
                                    justifyContent: 'center',
                                }}>
                                {<img src={currentAvatar} width={111} />}

                            </Avatar>

                            <Button
                                variant='contained' size="medium" component="label"
                                sx={{
                                    borderRadius: '30px', backgroundColor: '#D8295E', boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
                                    '&:hover': {
                                        backgroundColor: '#D8295E',
                                        color: '#FFFFFF',
                                        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'
                                    }
                                }}
                            >
                                <input hidden accept="image/*" multiple type="file"
                                    onChange={(e) => { handleImageChange(e) }}
                                />
                                change photo
                            </Button>


                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col style={textFieldStyle}>

                        <TextField
                            id="name"
                            label='Name'
                            variant="standard"
                            type="text"
                            autoComplete='name'
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            sx={{ width: '328px', paddingBottom: '23px' }}
                        />



                        <TextField
                            id="user_name"
                            label="Username"
                            variant="standard"
                            type="text"
                            value={username}
                            autoComplete="username"
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{ width: '328px', paddingBottom: '23px' }}
                        />



                        <TextField
                            id="email"
                            label="Email"
                            helperText=""
                            variant="standard"
                            type="email"
                            value={email}
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ width: '328px', paddingBottom: '23px' }}
                        />


                        <TextField
                            id="password"
                            label="Password"
                            helperText=""
                            variant="standard"
                            type="password"
                            value={password}
                            autoComplete="current_password"
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ width: '328px', paddingBottom: '23px' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>}
                        />

                    </Col>
                </Row>

            </form>

            <Row>

                <Col className="mt-5 text-center">
                    <PrivateSwitch
                    />

                </Col>

            </Row>
            <Row className="text-center">
                <Typography variant='button' sx={{ color: '#1E8582', fontSize: 14 }}>Private Account</Typography>

            </Row>

        </Container>
    )
}

export default ProfileScreen1


