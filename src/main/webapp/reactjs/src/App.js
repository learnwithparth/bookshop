import React, {useState} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Merit from "./components/Merit";
import MeritList from "./components/MeritList";
import MeritView from "./components/MeritView";
import Login from "./components/Login.js";
import Alert from "./components/AlertMessage.js";
import MeritRegister from "./components/MeritRegister";
import Register from "./components/Register";
import MyToast from "./components/MyToast";

function App() {

    return (
        <Router>
            <NavigationBar/>
            {/*<MyToast/>*/}
            <br/>
            <Container>
                <Routes>
                    <Route path="/" element={<MeritView />}/>
                    <Route path="/viewMerit" element={<MeritView/>}/>
                    <Route path="/viewMeritList" element={<MeritList/>}/>
                    <Route path="/meritregister" element={<MeritRegister/>}/>
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
