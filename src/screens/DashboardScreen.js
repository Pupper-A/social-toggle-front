import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Alert, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { sendToggle } from '../actions/toggleActions';
import axios from "axios";
import CustomizedSwitches, { BasicSwitch } from '../components/MuiSwitch';
import Profile from '../components/Profile';
import Username from '../components/Username';

function DashboardScreen() {
//     const [toggle, setToggle] = useState("")
//     const [time, setTime] = useState("")
//     const [message, setMessage] = useState("")
//     const [limit, setLimit] = useState("")

//     const history = useNavigate();
    
//     let redirect = ""
    
//     const dispatch = useDispatch()
    
//     const userToggle = useSelector(state => state.toggle)

//     const {error, loading} = userToggle

//     let token = null
    
//     useEffect(() => {
//         const userInfo = localStorage.getItem("userInfo")

//         if(userInfo){
//             token = "Bearer " + JSON.parse(userInfo).token
//         }else{
//             redirect = "/"
//             history(redirect)
//         }

//         async function getToggleInfo(){
//             const config = {
//                 headers: {
//                     "Authorization": token
//                 }
//             }
            
//             await axios.get("/api/users/toggle/", config).then((response) => {
//                 if(response.data){
//                     a = new Date(response.data.toggled_time)
//                     setToggle(response.data.is_toggled)
                    
//                 }else if(!localStorage.getItem("userInfo")){
//                     redirect = "/"
//                     history(redirect)
//                 }else{
//                     redirect = "/new-user"
//                     history(redirect)
//                 }
                
//             })
//         }
        
//         let a = null

//         getToggleInfo()

//         if(time<10){
//             setLimit(false)
//             setToggle(toggle)

//         }

//         setInterval(() => {
//             let b = new Date()
//             let def = Math.round((b-a)/60000)
//             setTime(String(def))

//         }, 1000);

//     }, [limit])

//     const toggleHandler = (checked) => {
        
//             setTime(0)
//             var bool = 0
//             setToggle(checked)
//             if(toggle === ""){
//                 bool = 1
//             }else if(toggle == true){
//                 bool = 0
//             }else{
//                 bool = 1
//             }
//             const userId = JSON.parse(localStorage.getItem("userInfo")).id
//             dispatch(sendToggle(userId, bool))
//             window.location.reload(false)

        
//   }

  return (
      <Container>
        {/* {loading && <Loader />}
        {message && <Alert variant='danger'>{message}</Alert>}
        {error && <Alert variant='danger'>{error}</Alert>} */}
        

        <Row>
            <Col className="d-flex justify-content-center">
                <Profile />
            </Col>
        </Row>
        <Row>
            <Col className="my-1 py-1 text-center">
                
                <Username />
            </Col>
        </Row>

        <Row>
        
        <Col className="my-5 py-5 text-center">
            <CustomizedSwitches
           

             />
             <p>What is your MOOD?</p>
        </Col>
        
        </Row>
      </Container>
      
  )
}

export default DashboardScreen
