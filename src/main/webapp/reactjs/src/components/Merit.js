import React, {Component} from "react";
import {Card, Table, Form, Button, Image, Col, Row} from "react-bootstrap";
import axios from 'axios';
import MyToast from "./MyToast";

export default class Merit extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.meritChange = this.meritChange.bind(this);
        this.submitMerit = this.submitMerit.bind(this);
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

    submitMerit(event) {

        event.preventDefault();
        const merit = {
            applicationNo: this.state.applicationNo,
            registeredName: this.state.registeredName,
            charusatMeritMarks: this.state.charusatMeritMarks,
            charusatMeritNo: this.state.charusatMeritNo,
            acpcMeritNo: this.state.acpcMeritNo,
            registeredMobile: this.state.registeredMobile,
            registeredEmail: this.state.registeredEmail
        }
        axios.post("http://localhost:8081/admission/merit", merit)
            .then(response => {
                if(response.data != null){
                    this.setState({"show": true});
                    setTimeout(()=>this.setState({"show": false}), 3000);
                    //alert("Merit Save Successfully");
                } else {
                    this.setState({"show": false});
                }
            }).catch(error => alert(error + ' while adding the merits'))
        this.setState(this.initialState);
    }

    meritChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children = {{show: this.state.show, message: "Merit Saved Successfully"}}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Form onSubmit={this.submitMerit} id={"meritForm"}>
                        <Card.Header>
                            <center><h4> Add CHARUSAT Merit Details</h4></center>
                        </Card.Header   >
                        <Card.Body>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Application No.</Form.Label>
                                    <Form.Control required name="applicationNo" value={this.state.applicationNo} onChange={this.meritChange} className={"bg-dark text-white"} type="text"
                                                  placeholder="enter your Application No."/>

                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="registeredName" value={this.state.registeredName}
                                                  onChange={this.meritChange} className={"bg-dark text-white"} type={"text"}
                                                  placeholder={"enter your name"}/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3" >
                                    <Form.Label>CHARUSAT Merit Marks</Form.Label>
                                    <Form.Control name="charusatMeritMarks" value={this.state.charusatMeritMarks}
                                                  onChange={this.meritChange} className={"bg-dark text-white"} type="text"
                                                  placeholder="enter your CHARUSAT Merit Marks"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>CHARUSAT Merit No</Form.Label>
                                    <Form.Control name="charusatMeritNo" value={this.state.charusatMeritNo}
                                                  onChange={this.meritChange} className={"bg-dark text-white"} type={"text"}
                                                  placeholder="enter your CHARUSAT Merit No"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>ACPC Merit No.</Form.Label>
                                    <Form.Control name="acpcMeritNo" value={this.state.acpcMeritNo} onChange={this.meritChange}
                                                  className={"bg-dark text-white"} type={"text"}
                                                  placeholder={"enter your ACPC Merit No."}/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control name="registeredMobile" value={this.state.registeredMobile} onChange={this.meritChange}
                                                  className={"bg-dark text-white"} type={"text"}
                                                  placeholder={"enter your Mobile No."}/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control name="registeredEmail" value={this.state.registeredEmail} onChange={this.meritChange}
                                                  className={"bg-dark text-white"} type={"text"}
                                                  placeholder={"enter your Email"}/>
                                </Form.Group>
                            </Row>
                            <Button variant="success" type="submit">
                                Save
                            </Button>
                        </Card.Body>
                    </Form>
                </Card>
            </div>


        );
    }
}
