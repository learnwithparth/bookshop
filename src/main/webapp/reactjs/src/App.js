import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from "./components/Welcome";
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Book from './components/Book';
import BookList from './components/BookLIst';
import Merit from "./components/Merit";
import MeritList from "./components/MeritList";
import {ModalFooter} from "react-bootstrap";
import MeritView from "./components/MeritView";

function App() {
  return (
    <Router>
        <NavigationBar/>
        <br/>
        <Container>
        <Routes>
            <Route path="/"  element={<MeritList/>}/>
            <Route path="/viewMerit"  element={<MeritView/>}/>
            <Route path="/viewMeritList"  element={<MeritList/>}/>
            <Route path="/addMerit"  element={<Merit/>}/>
            <Route path="/editMerit"  element={<Merit/>}/>
            <Route path="/deleteMerit"  element={<Merit/>}/>
        </Routes>
            </Container>
        <Footer/>
    </Router>
  );
}

export default App;
