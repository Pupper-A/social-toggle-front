import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
        <Header />
        <main className='py-5'>
            <Container>
                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />
                </Routes>
            </Container>
        </main>
        <Footer />
    </Router>
  )
}

export default App;