import React, {useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Alert, Container } from 'react-bootstrap';
import { Avatar, Box, Button, CssBaseline, Dialog, FormControl, FormGroup, FormLabel, IconButton, Input, Typography } from '@mui/material';
import '../components/myStyles.css';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { profile } from '../actions/profileActions';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { height, width } from '@mui/system';





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
    const [avatarcrop, setAvatarcrop] = useState('')

    const history = useNavigate()

    const dispatch = useDispatch()
    
    const userSelector = useSelector(state => state.profile)

    const {error, loading, userInfo} = userSelector
    
    const user = localStorage.getItem("userInfo")

    let redirect = ""
    
    useEffect(()=>{
        if(user){
            const jsonUserInfo = JSON.parse(user)
            setFirstName(jsonUserInfo.first_name)
            setLastName(jsonUserInfo.last_name)
            setUsername(jsonUserInfo.username)
            setEmail(jsonUserInfo.email)
            setCurrentAvatar(jsonUserInfo.avatar)
            setId(jsonUserInfo.id)
            
        }else{
            redirect = "/"
            history(redirect)
        }

        if(userInfo){
            setFirstName(userInfo.first_name)
            setLastName(userInfo.last_name)
            setUsername(userInfo.username)
            setEmail(userInfo.email)
            setCurrentAvatar(userInfo.avatar)
            setId(userInfo.id)
        }

    },[userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        setUsername(username.trim())
        setFirstName(first_name.trim())
        setLastName(last_name.trim())
        setPassword(password.trim())
        setConfirmPassword(confirmPassword.trim())


        if(password != confirmPassword){
            setMessage("Passwords do not match!")
            setColor("danger")

        }else if(password.length < 8 && password.length > 0){
            setMessage("Password must be at least 8 characters!")
            setColor("danger")
        }else{
            dispatch(profile(id, username, first_name, last_name, avatar, password, isPrivate))
            setMessage("Your Profile info changed successfuly.")
            setColor("success")
        }
    }

    const handleImageChange = (e) => {
        let newAvatar = avatar;
        newAvatar = e.target.files[0];
        setAvatar(newAvatar);
    };

    const handleChange = (e) => {
        const value = e.target.value
        setIsPrivate(value)
    }


    const cardStyle ={
    height:'289px',
    }
    const saveBtn = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height:'40px',
        alignItems:'center'
    }
    const textFieldStyle = {
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    padding:'0 16px',
    }
    const uploadInputRef = useRef(null);

  return (
    <Container>
        <Box component='form' onSubmit={submitHandler}>
            <div style={saveBtn}>
                
                <IconButton
                component={Link}
                to='/dashboard'
                
                sx = {{top: '2.88vh', justifyContent:'flex-end', color:"#D8295E", padding:'11px'}}
                
                >
                    <CloseIcon style={{fontSize:'2rem',  width:'36px',height:'36px'}} />

                </IconButton>

                <IconButton
                component="div"
                type='submit'
                sx = {{ top: '2.88vh', justifyContent:'flex-end', color:"#1E8582",padding:'11px'}}
                
                >
                    <DoneIcon style={{fontSize:'2rem',  width:'36px',height:'36px'}} />

                </IconButton>
            </div>

            <Row style={cardStyle}>
                <Col className="text-center justify-content-center" style={{marginTop:'74px', marginBottom:'59px'
                }}>     
                <div className='edit-profile'>
                <Avatar
                    id='avatar'
                    sx={{
                        width: '104px',
                        height: '104px',
                        color:'#D8295E',
                        background: '#F0F0F0',
                        margin:'0',
                        justifyContent:'center',
                    }}>
                        
                        <PersonIcon
                        sx={{
                            width:60.2,
                            height:60.2
                        }} />                        

                </Avatar>
                <Dialog
                    visible={avatarcrop}
                    header={()=>(
                        <p htmlFor='' className='text=2xl fonr-semibold textColor' >
                            
                        </p>
                    )}
                >

                </Dialog>
                <input
                    ref={uploadInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {handleImageChange(e);}}
                />
                <Button
                    onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
                    variant='contained' className='edit-btn' size="medium" type='file'
                    sx={{ borderRadius: '30px', backgroundColor:'#D8295E', boxShadow:'0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
                    '&:hover':{
                    backgroundColor:'#D8295E',
                    color:'#FFFFFF'
                    
                    }}}
                    >
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
                defaultValue={first_name}

                onChange = {(e) => setFirstName(e.target.value)}
                sx={{ width:'328px', paddingBottom:'23px'}}
                />
                

                
                <TextField
                    id="user_name"
                    label="Username"
                    variant="standard"
                    type="text"
                    autoComplete="username"
                    defaultValue={setFirstName}

                    onChange = {(e) => setUsername(e.target.value)}
                    sx={{ width:'328px', paddingBottom:'23px'}}
                    />
                
                
                
                <TextField
                    id="email"
                    label="Email"
                    helperText=""
                    variant="standard"
                    type="email"
                    autoComplete="email"
                    onChange = {(e) => setEmail(e.target.value)}
                    sx={{ width:'328px', paddingBottom:'23px'}}
                    />
                
                
                <TextField
                    id="password"
                    label="Password"
                    helperText=""
                    variant="standard"
                    type="password"
                    autoComplete="current_password"
                    onChange = {(e) => setPassword(e.target.value)}
                    sx={{ width:'328px', paddingBottom:'23px'}}
                    />

                </Col>
            </Row>
           
        </Box>
    
    </Container>
  )
}

export default ProfileScreen1

// edit profile handler doesnt Work

