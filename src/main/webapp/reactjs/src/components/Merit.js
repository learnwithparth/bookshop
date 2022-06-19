import React, {Component} from "react";
import {Card, Table, Form, Button, Image, Col, Row} from "react-bootstrap";
import axios from 'axios';
import MyToast from "./MyToast";
import {useParams} from "react-router-dom";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";

export default class Merit extends React.Component {

    constructor(props) {
        //const { id } = useParams();
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.meritChange = this.meritChange.bind(this);
        this.submitMerit = this.submitMerit.bind(this);
        this.state = {
            merits: [],

        }
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

    componentDidMount() {
        //const meritId = +this.props.match.params.id;
        axios.get("http://localhost:8081/admission/student/merit/" + '7')
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        applicationNo: response.data.applicationNo,
                        registeredName: response.data.registeredName,
                        charusatMeritMarks: response.data.charusatMeritMarks,
                        charusatMeritNo: response.data.charusatMeritNo,
                        acpcMeritNo: response.data.acpcMeritNo,
                        registeredMobile: response.data.registeredMobile,
                        registeredEmail: response.data.registeredEmail
                    });
                }
            });
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
        axios.post("http://localhost:8081/admission/manage/merit", merit)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show": true});
                    setTimeout(() => this.setState({"show": false}), 3000);
                    //alert("Merit Save Successfully");
                } else {
                    this.setState({"show": false});
                }
            }).catch(error => alert(error + ' while adding the merits'))
        this.setState(this.initialState);
    }

    updateMerit = event => {
        event.preventDefault();
        const merit = {
            id: this.state.id,
            applicationNo: this.state.applicationNo,
            registeredName: this.state.registeredName,
            charusatMeritMarks: this.state.charusatMeritMarks,
            charusatMeritNo: this.state.charusatMeritNo,
            acpcMeritNo: this.state.acpcMeritNo,
            registeredMobile: this.state.registeredMobile,
            registeredEmail: this.state.registeredEmail
        }
        axios.put("http://localhost:8081/admission/manage/merit/", merit)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show": true});
                    //setTimeout(()=>this.setState({"show": false}), 3000);
                    setTimeout(() => this.meritList(), 3000);
                    alert("Merit Updated Successfully");
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

    meritList = () => {
        return this.props.history.push("/viewMeritList");
    };

    render() {


        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children={{show: this.state.show, message: "Merit Saved Successfully"}}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Form onSubmit={this.submitMerit} id={"meritForm"}>
                        <Card.Header>
                            <center><h4> Add CHARUSAT Merit Details</h4></center>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Application No.</Form.Label>
                                    <Form.Control required name="applicationNo" value={this.state.applicationNo}
                                                  onChange={this.meritChange} className={"bg-dark text-white"}
                                                  type="text"
                                                  placeholder="enter your Application No."/>

                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formRegisterName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="registeredName" value={this.state.registeredName}
                                                  onChange={this.meritChange} className={"bg-dark text-white"}
                                                  type={"text"}
                                                  placeholder={"enter your name"}/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>CHARUSAT Merit Marks</Form.Label>
                                    <Form.Control name="charusatMeritMarks" value={this.state.charusatMeritMarks}
                                                  onChange={this.meritChange} className={"bg-dark text-white"}
                                                  type="text"
                                                  placeholder="enter your CHARUSAT Merit Marks"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>CHARUSAT Merit No</Form.Label>
                                    <Form.Control name="charusatMeritNo" value={this.state.charusatMeritNo}
                                                  onChange={this.meritChange} className={"bg-dark text-white"}
                                                  type={"text"}
                                                  placeholder="enter your CHARUSAT Merit No"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>ACPC Merit No.</Form.Label>
                                    <Form.Control name="acpcMeritNo" value={this.state.acpcMeritNo}
                                                  onChange={this.meritChange}
                                                  className={"bg-dark text-white"} type={"text"}
                                                  placeholder={"enter your ACPC Merit No."}/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control name="registeredMobile" value={this.state.registeredMobile}
                                                  onChange={this.meritChange}
                                                  className={"bg-dark text-white"} type={"text"}
                                                  placeholder={"enter your Mobile No."}/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control name="registeredEmail" value={this.state.registeredEmail}
                                                  onChange={this.meritChange}
                                                  className={"bg-dark text-white"} type={"text"}
                                                  placeholder={"enter your Email"}/>
                                </Form.Group>
                            </Row>
                            <Button variant="success" type="submit">
                                Save
                            </Button> <Button onClick={() => this.updateMerit()} variant="success" type="save">
                            Update
                        </Button>
                        </Card.Body>
                    </Form>
                </Card>
            </div>


        );
    }
}
