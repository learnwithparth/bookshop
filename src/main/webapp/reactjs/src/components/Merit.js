import React from "react";
import {Card, Table, Form, Button, Image} from "react-bootstrap";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export default class Merit extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            // validateOTP: true,
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

    findMeritDetails(){
        axios.get("http://localhost:8081/admission/merit/"+this.state.registeredMobile)
            .then(response => response.data)
            .then((data) => {
                    this.setState({merits: data});
                    //alert('user found !!! ');
                }
            );
    }

    mobileNoChanged = event => {
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
            .then(response => response.json)
            .then((data) => {
                    this.setState({merits: data});
                    alert('user found !!! ' + this.state.merits.length);
                }
            ).catch(e=>{console.log(e)});
        this.setState({

            validateOTP: true
        })
    }

    meritDisplay = event =>{
        this.setState({
            // showMerit: true
        })

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
                    alert('user found !!! ' + data.status);
                }
            );
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Your CHARUSAT Admission Merit no.</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address/Mobile No.</Form.Label>
                            <Form.Control required autoComplete={"off"} type="text" name="registeredMobile"  value={this.state.author}
                                          onChange={this.mobileNoChanged} placeholder="Enter registered mobile no." />
                            <Form.Text className="text-muted">
                                Please enter the Mobile No. provided at the time of registration.
                            </Form.Text>
                        </Form.Group>
                        <Button onClick={(event)=>this.meritDisplay(event)} variant="primary" type="submit">
                            Show Merit
                        </Button>

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
                                        <td colSpan={"7"}>{this.state.merits.length} Details Not Available</td>
                                    </tr> :
                                    this.state.merits.map((merit) => (
                                        <tr >


                                            <td>{merit.applicationNo}</td>
                                            <td>{merit.registeredName}</td>
                                            <td>{merit.charusatMeritMarks}</td>
                                            <td>{merit.charusatMeritNo}</td>
                                            <td>{merit.acpcMeritNo}</td>
                                            <td>
                                                <Button size={"sm"} variant={"outline-primary"}><FontAwesomeIcon icon={faEdit}/></Button>
                                                <Button size={"sm"} variant={"outline-danger"}><FontAwesomeIcon icon={faTrash}/></Button>
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
        {/*{*/}
        {/*    this.state.validateOTP ?*/}
        {/*        <div>*/}
        {/*        <Form.Group className="mb-3" controlId="formBasicEmail">*/}
        {/*                <Form.Label>One Time Password (OTP)</Form.Label>*/}
        {/*                <Form.Control type="text" placeholder="Enter the OTP received on your registered email or mobile no." />*/}

        {/*            </Form.Group>*/}
        {/*            <Button onClick={(event)=>this.showMerit(event)} variant="primary" type="submit">*/}
        {/*                Check Merit*/}
        {/*            </Button>*/}
        {/*        </div>*/}

        {/*        :*/}
        {/*        null*/}
        {/*}*/}

    }
}
