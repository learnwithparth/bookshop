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

function App() {
  return (
    <Router>
        <NavigationBar/>
        <Container>
        <Routes>
            <Route path="/"  element={<Welcome/>}/>
            <Route path="/add"  element={<Book/>}/>
            <Route path="/list"  element={<BookList/>}/>
            <Route path="/viewMerit"  element={<Merit/>}/>
            <Route path="/viewMeritList"  element={<MeritList/>}/>
        </Routes>
            </Container>
        <Footer/>
    </Router>
  );
}

export default App;
