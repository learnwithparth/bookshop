import React, {Component} from 'react';
import {Card, Image, Table, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faList,
    faEdit,
    faTrash,
    faStepBackward,
    faFastBackward,
    faStepForward,
    faFastForward,
    faSearch,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.findAllBooks();
    }

    findAllBooks(){
        axios.get("http://localhost:8081/rest/books")
            .then(response => response.data)
            .then((data) => {
                    this.setState({books: data});
                }
            );
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon={faList}/> Book List
                </Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN Number</th>
                            <th>Price</th>
                            {/*<th onClick={this.sortData}>Price <div className={this.state.sortToggle ? "arrow arrow-down" : "arrow arrow-up"}> </div></th>*/}
                            <th>Language</th>
                            <th>Genre</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.books.length === 0 ?
                            <tr align="centre">
                                <td colSpan={"7"}>{this.state.books.length} Books Available</td>
                            </tr> :
                            this.state.books.map((book) => (
                            <tr key = {book.id}>

                                <td>
                                    <Image src={book.coverPhotoURL} roundedCircle width={"25"} height ={"25"}/> {book.title}
                                </td>
                                <td>{book.author}</td>
                                <td>{book.isbnNumber}</td>
                                <td>{book.price}</td>
                                <td>{book.language}</td>
                                <td>{book.genre}</td>
                                <td>
                                    <Button size={"sm"} variant={"outline-primary"}><FontAwesomeIcon icon={faEdit}/></Button>
                                      <Button size={"sm"} variant={"outline-danger"}><FontAwesomeIcon icon={faTrash}/></Button>
                                </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}