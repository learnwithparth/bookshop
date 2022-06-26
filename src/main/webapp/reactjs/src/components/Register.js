import React, {useState, useEffect} from 'react';
import {Form, Card, Col, Row, Button, FormGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUndo} from "@fortawesome/free-solid-svg-icons";

export default function Register() {

    const [country, setCountry] = useState(null);
    const [lang, setLang] = useState(null);
    const [langList, setLangList] = useState([]);
    const [link, setLink] = useState("");

    // handle change event of the country dropdown
    const handleCountryChange = (obj) => {
        setCountry(obj);
        setLangList(obj.languages);
        setLang(null);
    };

    // handle change event of the language dropdown
    const handleLanguageChange = (obj) => {
        setLang(obj);
    };

    // generate the link when both dropdowns are selected
    useEffect(() => {
        if (country && lang) {
            setLink(`https://www.${country.url}/search?q=Clue+Mediator&gl=${country.country_code}&hl=${lang.code}`);
        }
    }, [country, lang]);

    return (
        <div>
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Register yourself</Card.Header>
                <Card.Body>
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form>

                        <Row style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Mobile No.</Form.Label>
                                <Form.Control
                                    name="mobileNo"
                                    // value={this.state.registeredMobile}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type={"text"}
                                    placeholder={"your Mobile No."}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    name="registeredEmail"
                                    // value={this.state.registeredEmail}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type={"text"}
                                    placeholder={"your Email"}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <br/>
                                <Button type="submit">
                                    Send OTP
                                </Button>{" "}
                                <Button
                                    // onClick={() => this.updateMerit()}

                                    type="reset">
                                    Reset
                                </Button>
                            </Form.Group>

                        </Row>
                        <br/>
                        <Row style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            <FormGroup as={Col} className="mb-3">
                                <Form.Label>One Time Password (OTP)</Form.Label>
                                <Form.Control required type="text" name="otp"
                                    // value={this.state.otp}
                                    // onChange={this.mobileNoChanged}
                                              placeholder="Enter the OTP received on registered mobile no. or email"
                                              className={"bg-dark text-white"}
                                              style={{width: "450px"}}
                                />
                            </FormGroup>

                                <br/>
                            <FormGroup as={Col} className="mb-3">
                                <br/>
                                <Button onClick={(event) => this.showMeritDetails(event)} type="submit">
                                    Register
                                </Button> <Button onClick={(event) => this.resetMerit(event)} variant="primary"
                                                  type="reset">
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                            </FormGroup>
                        </Row>
                        <br/>


                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
