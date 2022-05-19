import React, {Component} from 'react';
import {Form, Card, Button, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes, faSave} from '@fortawesome/free-solid-svg-icons';


export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            author: '',
            coverPhotoURL: '',
            isbnNumber: '',
            price: '',
            language: '',
            genre: ''
        }
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    submitBook(event) {
        alert(this.state.title);
        event.preventDefault();
    }

    bookChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Form onSubmit={this.submitBook} id="bookFormId">
                    <Card.Header>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control required type="text" name="title"
                                              value={this.state.title}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Enter Book Title"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAuthor">
                                <Form.Label>Author</Form.Label>
                                <Form.Control required type="text" name="author"
                                              value={this.state.author}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Enter Book Author"/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                <Form.Label>Cover Photo URL</Form.Label>
                                <Form.Control required type="text" name="coverPhotoURL" value={this.state.coverPhotoURL}
                                              onChange={this.bookChange} className={"bg-dark text-white"}
                                              placeholder="Enter Photo URL"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridISBNNumber">
                                <Form.Label>ISBN Number</Form.Label>
                                <Form.Control required type="text" name="isbnNumber"
                                              value={this.state.isbnNumber}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Enter ISBN Number"/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control required type="text" name="price"
                                              value={this.state.price}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Enter Price"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Control required type="text" name="language"
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
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }
}
