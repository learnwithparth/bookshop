import React, {Component} from 'react';
import {Form, Card, Button, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
import MyToast from './MyToast';
import {
    faList,
    faEdit,
    faTrash,
    faStepBackward,
    faFastBackward,
    faStepForward,
    faFastForward,
    faSearch,
    faTimes,
    faSave,
    faUndo
} from '@fortawesome/free-solid-svg-icons';


export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState = {
        id: '',
        title: '',
        author: '',
        coverPhotoURL: '',
        isbnNumber: '',
        price: '',
        language: '',
        genre: ''
    }

    resetBook = () =>{
        this.setState(()=>this.initialState);
    }

    submitBook = event => {
        event.preventDefault();

        const book = {
            title: this.state.title,
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL,
            isbnNumber: this.state.isbnNumber,
            price: this.state.price,
            language: this.state.language,
            genre: this.state.genre
        };

        axios.post("http://localhost:8081/rest/books", book)
            .then(response => {
                if(response.data != null) {
                    this.setState(this.initialState);
                    alert("Book Saved Successfully");
                }
            })
    }

    bookChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        const {title, author, coverPhotoURL, isbnNumber, price, language, genre} = this.state;
        return (
            <div>
                <div>
                    <MyToast />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookFormId">
                        <Card.Header>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control required autoComplete={"off"} type="text" name="title"
                                                  value={this.state.title}
                                                  onChange={this.bookChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter Book Title"/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control required autoComplete={"off"} type="text" name="author"
                                                  value={this.state.author}
                                                  onChange={this.bookChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter Book Author"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                    <Form.Label>Cover Photo URL</Form.Label>
                                    <Form.Control required autoComplete={"off"} type="text" name="coverPhotoURL" value={this.state.coverPhotoURL}
                                                  onChange={this.bookChange} className={"bg-dark text-white"}
                                                  placeholder="Enter Photo URL"/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridISBNNumber">
                                    <Form.Label>ISBN Number</Form.Label>
                                    <Form.Control required autoComplete={"off"} type="text" name="isbnNumber"
                                                  value={this.state.isbnNumber}
                                                  onChange={this.bookChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter ISBN Number"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required autoComplete={"off"} type="text" name="price"
                                                  value={this.state.price}
                                                  onChange={this.bookChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter Price"/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLanguage">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control required autoComplete={"off"} type="text" name="language"
                                                  value={this.state.language}
                                                  onChange={this.bookChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter Language"/>
                                </Form.Group>
                            </Row>

                        </Card.Body>
                        <Card.Footer>
                            <Button variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave}/> Submit
                            </Button>{" "}
                            <Button variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>

        )
    }
}
