import React from "react";
import {Card, Table, Form, Button, Image} from "react-bootstrap";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faUndo} from "@fortawesome/free-solid-svg-icons";

export default class Merit extends React.Component {
    constructor() {
        super();
        this.mobileNoChanged = this.mobileNoChanged.bind(this);
        this.state = {
            merits: [],
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
        //optGenerated: false,
        otp: ''
    }

    resetMerit = (event) => {
        this.setState(() => this.initialState);
    }


    findMeritDetails = event => {
        const url = "http://localhost:8081/admission/merit/generateOTP/" + this.state.registeredMobile;

        axios.get(url)
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                alert('Invalid Mobile No.');
            });
    }

    showMeritDetails = event => {
        event.preventDefault();
        const url = "http://localhost:8081/admission/merit/validateOTP?registeredMobile="+this.state.registeredMobile+"&otp="+this.state.otp;
        axios.get(url)
            .then(response => {
                const merits = response.data;
                this.setState({merits});
            } )
            .catch(error => alert('Invalid OTP'));
        //this.state.otpGenerated = false;
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
                            <Form.Control type="text" name="registeredMobile"
                                          value={this.state.registeredMobile}
                                          onChange={this.mobileNoChanged} placeholder="Enter registered mobile no."
                                          style={{width: "450px"}}
                            required/>
                            <Form.Text className="text-muted">
                                Please enter the Mobile No. provided at the time of registration.
                            </Form.Text>
                            <br/>
                            {/*{this.state.otpGenerated ?*/}
                                <div>
                                    <Form.Label>One Time Password (OTP)</Form.Label>
                                    <Form.Control type="text" name="otp"
                                                  value={this.state.otp}
                                                  onChange={this.mobileNoChanged}
                                                  placeholder="Enter the OTP received on registered mobile no. or email"
                                                  style={{width: "450px"}}
                                                  required/>
                                </div>
                                {/*: null*/}
                            {/*}*/}
                        </Form.Group>
                        {/*{!this.state.otpGenerated ?*/}
                            <Button onClick={(event) => this.findMeritDetails(event)} variant="primary" type="submit">
                                Generate OTP
                            </Button>
                            {/*:*/}
                            <Button onClick={(event) => this.showMeritDetails(event)} type="submit">
                                Show Merit
                            </Button>
                        {/*}*/}
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
