import { Button, CssBaseline, Snackbar, TextField, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import greenUp from '../images/green-up.png'
import Alert from '@mui/material/Alert';
import { login } from '../actions/userActions';
import { Container } from '@mui/system';


const LoginScreen1 = (location) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const history= useNavigate();
  
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const {error, loading, userInfo} = userLogin

  useEffect(() => {
      if(userInfo){
          history(redirect)
      }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(username, password))
        
     
  }

  return (
    <Container component="main" sx={{backgroundColor:'#FFFFFF',
      display:'flex',
      padding:0,
      width:'100vw',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      maxWidth:505
      }}>
      <div style={{display:'flex', width:280, position:'sticky'}}>
      <Typography variant='h4'
      sx={{
        marginRight:'46.11vw',
        marginBottom:'9.62vh',
        paddingTop:'5.87vh',
        color:'#1E8582',
        textTransform:'none',
        top:47,
        left:43
        
      }}>
        Welcome Back
      </Typography>
      </div>
      
      <img src={greenUp} />
      <form className='login-form' onSubmit={submitHandler}>
      {error && <Snackbar
              sx={{width:272, display:'flex', justifyContent:'center'}}
              open={submitHandler}
              autoHideDuration={5000}
              message={error}
              ></Snackbar>}
        <TextField
        label='Username'
        placeholder='Username'
        autoComplete='username'
        type='username'
        variant='outlined'
        value={username}
        onChange = {(e) => setUsername(e.target.value)}
        sx={{width:272}}
                >

        </TextField>
        <TextField
        label='Password'
        placeholder='Password'
        autoComplete='password'
        variant='outlined'
        type="password"
        value={password}
        onChange = {(e) => setPassword(e.target.value)}
        sx={{width:272, gap:16}}

        >

        </TextField>
        <div style={{display:'flex', flexDirection:'row', width:'272px'}}>
        <Typography variant='subtitle2' textTransform='none' sx={{padding:0}}>Forgot Password?</Typography>

        </div>
        <Button
        type='submit'
        variant='contained'
        sx={{ borderRadius: 68,
            backgroundColor:'#1E8582',
            textTransform: "none",
            width:'272px',
            height:'42px',
            '&:hover':{
                backgroundColor:'#1E8582',
                color:'#FFFFFF',
                boxShadow:'0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'
                
              }}}
              > Login
              </Button>
      </form>
      <div style={{display:'flex', flexDirection:'row', gap:5, paddingBottom:66}}>
        <Typography variant='subtitle2' textTransform='none'> Need an account?</Typography>
        <Typography variant='subtitle2' textTransform='none' color='#D8295E' component={Link} to='/signup'> Sign up</Typography>
      </div>
      <CssBaseline />
    </Container>
    
  )
}

export default LoginScreen1