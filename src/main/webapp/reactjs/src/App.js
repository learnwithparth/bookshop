import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Merit from "./components/Merit";
import MeritList from "./components/MeritList";
import MeritView from "./components/MeritView";
import Login from "./components/login.js";
import Register from "./components/register.js";

function App() {
    return (
        <Router>
            <NavigationBar/>
            <br/>
            <Container>
                <Routes>
                    <Route path="/" element={<MeritList/>}/>
                    <Route path="/viewMerit" element={<MeritView/>}/>
                    <Route path="/viewMeritList" element={<MeritList/>}/>
                    <Route path="/addMerit" element={<Merit/>}/>
                    <Route path="/editMerit/:id" element={<Merit/>}/>
                    <Route path="/deleteMerit" element={<Merit/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    );
}

export default App;
