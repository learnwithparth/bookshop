import React, {useState, useRef, useEffect} from 'react';
import {Form, Card, Col, Row, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import Select from "react-select";
import SelectSearch from "react-select-search";
import data from '../../src/json/data.json';
import countryStateCity from '../../src/json/countriesStatesCities.json';
import Accordion from 'react-bootstrap/Accordion';

export default function register() {

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
                <Card.Header>Details</Card.Header>
                <Card.Body>
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form>

                        <Row title="Input your personal details" style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            {/*<Form.Group as={Col} className="mb-3">*/}

                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    required
                                    name="firstName"
                                    // value={this.state.applicationNo}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type="text"
                                    placeholder="your first name"
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control
                                    name="middleName"
                                    // value={this.state.registeredName}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type={"text"}
                                    placeholder={"your middle name"}
                                />

                            </Form.Group>

                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="formRegisterName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    name="lastName"
                                    // value={this.state.registeredName}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white "}
                                    type={"text"}
                                    placeholder={"your last name"}
                                />
                            </Form.Group>
                        </Row>
                    <br/>
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
                                <Form.Label>Father's Mobile No.</Form.Label>
                                <Form.Control
                                    name="fatherMobileNo"
                                    // value={this.state.registeredMobile}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type={"text"}
                                    placeholder={"your father's mobile no."}
                                />
                            </Form.Group>
                        </Row>
                        <br/>
                        <Row style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Select a level</Form.Label>
                                <Select
                                    placeholder="Select level"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Select a program</Form.Label>
                                <Select
                                    placeholder="Select Language"
                                    value={lang}
                                    options={langList}
                                    onChange={handleLanguageChange}
                                    getOptionLabel={x => x.name}
                                    getOptionValue={x => x.code}
                                />
                            </Form.Group>
                        </Row>
                        <br/>
                        <Row style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            <Form.Label>Select program preferences as per your interest</Form.Label>
                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Program Preference 1"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Program Preference 2"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Program Preference 3"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Program Preference 4"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Program Preference 5"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                        </Row>
                        <br/>
                        <Row style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            <Form.Label>Select Your Country, State and City</Form.Label>
                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Select Country"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Select State"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Select
                                    placeholder="Select City"
                                    value={country}
                                    options={data}
                                    onChange={handleCountryChange}
                                    getOptionLabel={x => x.region}
                                    getOptionValue={x => x.country_code}
                                />
                            </Form.Group>
                        </Row>
                        <br/>
                        <Row style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            <Form.Group as={Col} className="mb-3">

                                <Form.Label>12th Registration No.</Form.Label>
                                <Form.Control
                                    required
                                    name="12thRegistrationNo"
                                    // value={this.state.applicationNo}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type="text"
                                    placeholder="your first name"
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>GUJCET Registration No.</Form.Label>
                                <Form.Control
                                    required
                                    name="gujcetRegistrationNo"
                                    // value={this.state.applicationNo}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type="text"
                                    placeholder="your first name"
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>ACPC Registration No.</Form.Label>
                                <Form.Control
                                    required
                                    name="acpcRegistrationNo"
                                    // value={this.state.applicationNo}
                                    // onChange={this.meritChange}
                                    className={"bg-dark text-white"}
                                    type="text"
                                    placeholder="your first name"
                                />
                            </Form.Group>
                        </Row>
                        <br/>
                        <Row style={{"borderWidth": "3px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid'}}>
                            <Form.Group controlId="formFile" as={Col} className="mb-3">
                                <Form.Label>Upload 12th Marksheet</Form.Label>
                                <Form.Control type="file" className="w-75"/>
                            </Form.Group>
                            <Form.Group controlId="formFile" as={Col} className="mb-3">
                                <Form.Label>Upload GUJCET Marksheet</Form.Label>
                                <Form.Control type="file" className="w-75"/>
                            </Form.Group>
                            <Form.Group controlId="formFile" as={Col} className="mb-3">
                                <Form.Label> Upload ACPC Registration Letter</Form.Label>
                                <Form.Control type="file" className="w-75"/>
                            </Form.Group>
                        </Row>
                        <br/>

                        {/* <Row>
              <Select
                id="country"
                name="country"
                label="country"
                options={updatedCountries}
                value={values.country}
                // onChange={value => {
                //   setFieldValue("country", value);
                //   setFieldValue("state", null);
                //   setFieldValue("city", null);
                // }}
                onChange={(value) => {
                  setValues({ country: value, state: null, city: null }, false);
                }}
              />
              <Select
                id="state"
                name="state"
                options={updatedStates(
                  values.country ? values.country.value : null
                )}
                value={values.state}
                onChange={(value) => {
                  setValues({ state: value, city: null }, false);
                }}
              />
              <Select
                id="city"
                name="city"
                options={updatedCities(
                  values.state ? values.state.value : null
                )}
                value={values.city}
                onChange={(value) => setFieldValue("city", value)}
              />
              <button type="submit">Submit</button>
              <p>{JSON.stringify(csc.get)}</p>
            </Row> */}

                        <Button variant="success" type="submit">
                            Save
                        </Button>{" "}
                        <Button
                            // onClick={() => this.updateMerit()}
                            variant="success"
                            type="save"
                        >
                            Update
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
