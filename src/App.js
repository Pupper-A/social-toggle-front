import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
  return (
    <Router>
        <Header />
        <main className='py-5'>
            <Container>
                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />
                    <Route path="/login" element={<LoginScreen />} exact />
                    <Route path="/signup" element={<SignupScreen />} exact />
                </Routes>
            </Container>
        </main>
        <Footer />
    </Router>
  )
}

export default App;