import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';

export default class BookList extends Component{
    render(){
        return(
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
                        <tr align="centre">
                            <td colSpan={"7"}>No Books Available</td>
                        </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}