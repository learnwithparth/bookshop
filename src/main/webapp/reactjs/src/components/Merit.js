import React from "react";
import {Card, Table, Form, Button, Image} from "react-bootstrap";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faUndo} from "@fortawesome/free-solid-svg-icons";

export default class Merit extends React.Component {
    constructor(props) {
        super(props);
        this.mobileNoChanged = this.mobileNoChanged.bind(this);

        this.state = {
            merits: [],
            otpGenerated: false
        };
    }

    initialState = {
        applicationNo: '',
        registeredName: '',
        charusatMeritMarks: '',
        charusatMeritNo: '',
        acpcMeritNo: '',
        registeredMobile: '',
        registeredEmail: '',
        optGenerated: false
    }

    resetMerit = (event) => {
        this.setState(() => this.initialState);
    }


    findMeritDetails = event => {

        let url = "http://localhost:8081/admission/merit/" + this.state.registeredMobile;

        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                    this.setState({merits: data});
                }
            );
        this.state.otpGenerated = true;
    }

    mobileNoChanged = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (

            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    <center><h4> View Your CHARUSAT Admission Merit no. </h4></center>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control required type="text" name="registeredMobile"
                                          value={this.state.registeredMobile}
                                          onChange={this.mobileNoChanged} placeholder="Enter registered mobile no."
                                          maxlength="10"/>
                            <Form.Text className="text-muted">
                                Please enter the Mobile No. provided at the time of registration.
                            </Form.Text>
                            <br/>
                            <div>
                                <Form.Label>One Time Password (OTP)</Form.Label>
                                <Form.Control required type="text" name="otp" value={this.state.otp}
                                              onChange={this.otp}
                                              placeholder="Enter the OTP received on registered mobile no. or email"
                                              maxlength="6"/>
                            </div>
                        </Form.Group>
                        {!this.state.otpGenerated ?
                            <Button onClick={(event) => this.findMeritDetails(event)} variant="primary" type="submit">
                                Generate OTP
                            </Button>
                            : <Button onClick={(event) => this.findMeritDetails(event)} variant="primary" type="submit">
                                Show Merit
                            </Button>
                        }
                        {' '}
                        <Button onClick={(event) => this.resetMerit(event)} variant="primary" type="reset">
                            <FontAwesomeIcon icon={faUndo}/> Reset
                        </Button>
                        <hr/>
                        <Table bordered hover striped variant={"dark"}>
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
                                            <td>
                                                <Button size={"sm"} variant={"outline-primary"}><FontAwesomeIcon
                                                    icon={faEdit}/></Button>
                                                <Button size={"sm"} variant={"outline-danger"}><FontAwesomeIcon
                                                    icon={faTrash}/></Button>
                                            </td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
