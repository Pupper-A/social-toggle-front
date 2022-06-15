import {useState, useEffect} from "react";
import axios from "axios";

function SignUp() {
    const [signUpForm , setSignUpForm] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    })
    function addUser(event){
        axios({
            method: "POST",
            url:"/signup/",
            data:{
                first_name: signUpForm.first_name,
                last_name: signUpForm.last_name,
                username: signUpForm.username,
                email: signUpForm.email,
                password: signUpForm.password
            }
          })
            setSignUpForm((
                {
                    first_name: "",
                    last_name: "",
                    username: "",
                    email: "",
                    password: ""
                }
            ))

            event.preventDefault()
        
    }

    function handleChange(event) { 
        const {value, name} = event.target
        setSignUpForm(prevNote => ({
            ...prevNote, [name]: value})
        )
    }

    return (
        <form action="post">
            <input onChange={handleChange} type="text" placeholder="first name" name="first_name" value={signUpForm.first_name} /><br />
            <input onChange={handleChange} type="text" placeholder="last name" name="last_name" value={signUpForm.last_name} /><br />
            <input onChange={handleChange} type="text" placeholder="username" name="username" value={signUpForm.username} /><br />
            <input onChange={handleChange} type="email" placeholder="email" name="email" value={signUpForm.email} /><br />
            <input onChange={handleChange} type="password" placeholder="password" name="password" value={signUpForm.password} /><br />
            <button onClick={addUser}>Sign Up</button>
        </form>
    );
    }
export default SignUp;