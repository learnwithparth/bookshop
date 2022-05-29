import React from "react";
import {Link} from "react-router-dom";
import {
    Card,
    Table,
    Image,
    ButtonGroup,
    Button,
    InputGroup,
    FormControl
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default class MeritList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            merits: []
        }
    }

    initialState = {
        applicationNo: '',
        registeredName: '',
        charusatMeritMarks: '',
        charusatMeritNo: '',
        acpcMeritNo: '',
        registeredMobile: '',
        registeredEmail: '',

    }

    componentDidMount() {
        axios.get("http://localhost:8081/admission/merit/showAll/")
            .then(response => {
                const merits = response.data;
                this.setState({merits});
            })
            .catch(error => alert(error + ' while fetching all the merits'))
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Merit List 2022</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Application No.</th>
                            <th>Registered Name</th>
                            <th>CHARUSAT Merit Marks</th>
                            <th>CHARUSAT Merit No</th>
                            <th>ACPC Merit No.</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.merits.length === 0 ?
                                <tr align="centre">
                                    <td colSpan={"7"}>{this.state.merits.length} Details are Not Available!!!</td>
                                </tr> :
                                this.state.merits.map((merit) => (
                                    <tr key={merit.id}>
                                        <td>{merit.applicationNo}</td>
                                        <td>{merit.registeredName}</td>
                                        <td>{merit.charusatMeritMarks}</td>
                                        <td>{merit.charusatMeritNo}</td>
                                        <td>{merit.acpcMeritNo}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link
                                                    to={"edit/" + merit.id}
                                                    className="btn btn-sm btn-outline-primary"
                                                >
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Link>{' '}
                                                <Button
                                                    size="sm"
                                                    variant="outline-danger"
                                                    onClick={() => this.deleteMerit(merit.id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        );
    }
}
