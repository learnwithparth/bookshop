import React from "react";
import {Card, Table} from "react-bootstrap";
import axios from "axios";

export default class MeritList extends React.Component {
    constructor(props){
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
            .then(response => {const merits = response.data;
                this.setState({merits});
            })
            .catch(error=> alert (error + ' while fetching all the merits'))
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
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.merits.length === 0 ?
                                <tr align="centre">
                                    <td colSpan={"7"}>{this.state.merits.length} Details are Not Available!!!</td>
                                </tr> :
                                this.state.merits.map((merit) => (
                                    <tr>
                                        <td>{merit.applicationNo}</td>
                                        <td>{merit.registeredName}</td>
                                        <td>{merit.charusatMeritMarks}</td>
                                        <td>{merit.charusatMeritNo}</td>
                                        <td>{merit.acpcMeritNo}</td>
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
