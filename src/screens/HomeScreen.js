import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomeScreen() {
    const history= useNavigate();
    
    let redirect = ""

    const userInfo = localStorage.getItem("userInfo")

    useEffect(() => {
      if(userInfo){
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
              if(response.data){
                  redirect = "/dashboard"
                  localStorage.setItem("toggleInfo", JSON.stringify(response.data))
                  history(redirect)

              //Else we send user to new-user page to save first mood
              }else{
                  redirect = "/new-user"
                  history(redirect)
              }
                  
          })
      }
  }, [history, userInfo, redirect])

  return (
    <div>
        <p>Home Screen</p>
    </div>
  )
}

export default HomeScreen