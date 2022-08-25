import React from 'react';
// import Header from './components/Header';
import BasicMenu from './components/BasicMenu';
// import Footer from './components/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen1';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import NewUserScreen from './screens/NewUserScreen';
import FindPeople from './screens/FindPeople';
import ProfileScreen1 from './screens/ProfileScreen1';
import { useEffect } from 'react';
// import '@fontsource/roboto/300.css';
import icon from './toggle-on-solid.png';
import axios from 'axios';
import { BottomNav } from './components/BottomNav';
import CssBaseline from '@mui/material/CssBaseline';
import StatsScreen from './screens/StatsScreen';



axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


function App() {

    return (
        <Router>

            <main>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />
                    <Route path="/login" element={<LoginScreen />} exact />
                    <Route path="/signup" element={<SignupScreen />} exact />
                    <Route path="/dashboard" element={<DashboardScreen />} exact />
                    <Route path="/new-user" element={<NewUserScreen />} exact />
                    <Route path="/stats" element={<StatsScreen />} exact />
                    <Route path="/people" element={<FindPeople />} exact />
                    <Route path="/profile" element={<ProfileScreen1 />} exact />

                </Routes>
                
            </main>
            
        </Router>
    )
}

export default App;
