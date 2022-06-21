import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

function LoginScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Log In")
    }

  return (
      
    <FormContainer>
        <h1>Log In</h1>
        <Form onSubmit={submitHandler} className="my-4">
            <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type = "text"
                    placeholder='Username'
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password' className="my-3">
                <Form.Label>password</Form.Label>
                <Form.Control
                    type = "password"
                    placeholder='Password'
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>Log In</Button>
        </Form>
    </FormContainer>
  )
}

export default LoginScreen