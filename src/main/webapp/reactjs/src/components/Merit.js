import React from "react";
import { Card, Table, Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Merit extends React.Component {
    constructor() {
        super();
        this.state={
            validateOTP: true,
            showMerit: true
        }
        this.generateOTP = this.generateOTP.bind(this);
        this.state = {
            merits: []
        };
    }

    initialState = {
        applicationNo: '',
        registeredName: '',
        charusatMeritMarks: '',
        charusatMeritNo: '',
        acpcMeritNo: '',
        registeredMobile: '',
        registeredEmail: ''
    }

    meritChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    generateOTP= event =>{


        event.preventDefault();

        if(this.state.registeredMobile.length!=10){
            alert("Invalid Mobile No.");
            return;
        }

        axios.get("http://localhost:8081/admission/merit/"+this.state.registeredMobile)
            .then(response => response.data)
            .then((data) => {
                    this.setState({merits: data});
                    //alert('user found !!! ');
                }
            );

        this.setState({
            validateOTP: true
        })



    }

    showMerit = event =>{
        this.setState({
            showMerit: true
        })
        alert('OTP Verified Successfully!!!');
        const merit = {
            applicationNo : this.state.applicationNo,
            registeredName:this.state.registeredName,
            charusatMeritMarks:this.state.charusatMeritMarks,
            charusatMeritNo:this.state.charusatMeritNo,
            acpcMeritNo:this.state.acpcMeritNo,
            registeredMobile:this.state.registeredMobile,
            registeredEmail:this.state.registeredEmail
        }

        axios.get("http://localhost:8081/admission/merit/"+this.state.registeredMobile)
            .then(response => response.data)
            .then((data) => {
                    this.setState({merits: data});
                    console.log('user found !!! ' + data.status);
                }
            );
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>View your CHARUSAT Admission Merit no.</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address/Mobile No.</Form.Label>
                            <Form.Control required autoComplete={"off"} type="text" name="registeredMobile"  value={this.state.author}
                                          onChange={this.meritChange} placeholder="Enter registered mobile no." />
                            <Form.Text className="text-muted">
                                Please enter the Mobile No. provided at the time of registration.
                            </Form.Text>
                        </Form.Group>
                        <Button onClick={(event)=>this.generateOTP(event)} variant="primary" type="submit">
                            Generate OTP
                        </Button>
                    </Form>
                    <hr/>
                    {
                        this.state.validateOTP ?
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>One Time Password (OTP)</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the OTP received on your registered email or mobile no." />

                                </Form.Group>
                                <Button onClick={(event)=>this.showMerit(event)} variant="primary" type="submit">
                                    Check Merit
                                </Button>
                            </Form>
                            :
                            null
                    }

                    <hr/>

                    {
                        this.state.showMerit ? this.state.merits.length =1 ?

                            this.state.merits.map((merit) => (

                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th>Application No.</th>
                                    <th>{merit.applicationNo}</th>
                                </tr>
                                </thead>
                                <thead>
                                <tr>
                                    <th>Registered Name</th>
                                    <th>{merit.registeredName}</th>
                                </tr>
                                </thead>
                                <thead>
                                <tr>
                                    <th>CHARUSAT Merit Marks</th>
                                    <th>{merit.charusatMeritMarks}</th>
                                </tr>
                                </thead>
                                <thead>
                                <tr>
                                    <th>CHARUSAT Merit No</th>
                                    <th>{merit.charusatMeritNo}</th>
                                </tr>
                                </thead>
                                <thead>
                                <tr>
                                    <th>ACPC Merit No.</th>
                                    <th>{merit.acpcMeritNo}</th>
                                </tr>
                                </thead>

                            </Table>
                            ))
                            : null
                        : null
                    }

                </Card.Body>
            </Card>
        );
    }
}
