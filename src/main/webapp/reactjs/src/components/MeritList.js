import React from "react";
import {Link} from "react-router-dom";
import './Style.css';
import {
    Card,
    Table,
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
            merits: [],
            search:'',
            currentPage: 1,
            meritsPerPage: 5,
            sortToggle: true
        }
    }

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
        this.findAllMerits(this.state.currentPage);
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
        this.findAllMerits(this.state.currentPage);
    }

    findAllMerits(currentPage) {
        currentPage -= 1;
        let sortDir = this.state.sortToggle ? "asc" : "desc";
        axios.get("http://localhost:8081/admission/manage/merit/showAll?pageNumber=" + currentPage + "&pageSize=" + this.state.meritsPerPage + "&sortBy=charusatMeritMarks&sortDir=" + sortDir)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    merits: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            })
            .catch(error => alert(error + ' while fetching all the merits'))
    }

    deleteMerit = (meritId) => {
        axios.delete("http://localhost:8081/admission/manage/merit/" + meritId)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show": true});
                    setTimeout(() => this.setState({"show": false}), 3000);
                    alert("Merit Deleted Successfully");
                    this.setState({
                        merits: this.state.merits.filter(merit => merit.id !== meritId)
                    });
                } else {
                    this.setState({"show": false});
                }
            }).catch(error => alert(error + ' while deleting the merits'))
        this.setState(this.initialState);
    }

    changePage = (event) => {
        let targetPage = parseInt(event.target.value)
        if(this.state.search){
            this.searchChange(targetPage);
        } else {
            this.findAllMerits(targetPage);
        }

        this.setState({
            [event.target.name]: targetPage
        });
    };

    firstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if(this.state.search){
                this.searchChange(firstPage);
            } else {
                this.findAllMerits(firstPage);
            }
        }
    };

    prevPage = () => {
        let prevPage = 1;
        if (this.state.currentPage > prevPage) {
            if(this.state.search){
                this.searchChange(this.state.currentPage - prevPage);
            } else {
                this.findAllMerits(this.state.currentPage - prevPage);
            }
        }
    };

    lastPage = () => {
        let condition = Math.ceil(this.state.totalElements / this.state.meritsPerPage);
        if (this.state.currentPage < condition) {
                if(this.state.search){
                    this.searchChange(condition);
                } else {
                    this.findAllMerits(condition);
                }
        }
    };

    nextPage = () => {
        if (this.state.currentPage <
            Math.ceil(this.state.totalElements / this.state.meritsPerPage)) {
            this.findAllMerits(this.state.currentPage + 1);
        }
    };

    searchChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    cancleSearch = () => {
        this.setState({"search":''});
        this.findAllMerits(this.state.currentPage);
    }

    searchData = (currentPage) => {
        currentPage -= 1;

        axios.get("http://localhost:8081/admission/manage/merit/search/"+this.state.search+"?page="+currentPage+"&size="+this.state.meritsPerPage)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    merits: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            })
            .catch(error => alert(error + ' while fetching all the merits'))
    }

    render() {
        const {merits, currentPage, totalPages} = this.state;
        // const lastIndex = currentPage * meritsPerPage;
        // const firstIndex = lastIndex - meritsPerPage;
        // const currentMerits = this.state.merits.slice(firstIndex, lastIndex);
        // const totalPages = Math.ceil(this.state.merits.length / meritsPerPage);
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    <div style={{"float": "left"}}>
                        <FontAwesomeIcon icon={faList}/> Merit List 2022
                    </div>
                    <div style={{"float": "right"}}>
                        <InputGroup size="sm">
                            <FormControl placeholder="search" name="search" value={this.state.search}
                                         className={"info-border bg-dark text-white"}
                                            onChange={this.searchChange}/>
                            {/*<InputGroup.Append>*/}
                            <Button size="sm" variant="outline-info" type="button" onClick={this.searchData}>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                            <Button size="sm" variant="outline-danger" type="button" onClick={this.cancleSearch}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </Button>
                            {/*</InputGroup.Append>*/}
                        </InputGroup>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Application No.</th>
                            <th>Registered Name</th>
                            <th onClick={this.sortData}>CHARUSAT Merit Marks
                                <div className={this.state.sortToggle ? "arrow arrow-down" : "arrow arrow-up"}/>
                            </th>
                            <th>CHARUSAT Merit No</th>
                            <th>ACPC Merit No.</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            merits.length === 0 ?
                                <tr align="centre">
                                    <td colSpan={"7"}>{merits.length} Details are Not Available!!!</td>
                                </tr> :
                                merits.map((merit) => (
                                    <tr key={merit.id}>
                                        <td>{merit.applicationNo}</td>
                                        <td>{merit.registeredName}</td>
                                        <td>{merit.charusatMeritMarks}</td>
                                        <td>{merit.charusatMeritNo}</td>
                                        <td>{merit.acpcMeritNo}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link
                                                    to={"/editMerit/" + merit.id}
                                                    className="btn btn-sm btn-outline-primary"
                                                >
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Link>{' '}
                                                <Button
                                                    size="sm"
                                                    variant="outline-danger"
                                                    onClick={this.deleteMerit.bind(this, merit.id)}
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
                <Card.Footer>
                    <div style={{float: "left"}}>
                        Showing Page {currentPage} of {totalPages}
                    </div>
                    <div style={{float: "right"}}>
                        <InputGroup size="sm">
                            {/*<InputGroup.Prepend>*/}
                            <Button
                                type="button"
                                variant="outline-info"
                                disabled={currentPage === 1}
                                onClick={this.firstPage}
                            >
                                <FontAwesomeIcon icon={faFastBackward}/> First
                            </Button>
                            <Button
                                type="button"
                                variant="outline-info"
                                disabled={currentPage === 1}
                                onClick={this.prevPage}
                            >
                                <FontAwesomeIcon icon={faStepBackward}/> Prev
                            </Button>
                            {/*</InputGroup.Prepend>*/}
                            <FormControl
                                className={"page-num bg-dark"}
                                name="currentPage"
                                value={currentPage}
                                onChange={this.changePage}
                            />
                            {/*<InputGroup.Append>*/}
                            <Button
                                type="button"
                                variant="outline-info"
                                disabled={currentPage === totalPages}
                                onClick={this.nextPage}
                            >
                                <FontAwesomeIcon icon={faStepForward}/> Next
                            </Button>
                            <Button
                                type="button"
                                variant="outline-info"
                                disabled={currentPage === totalPages}
                                onClick={this.lastPage}
                            >
                                <FontAwesomeIcon icon={faFastForward}/> Last
                            </Button>
                            {/*</InputGroup.Append>*/}
                        </InputGroup>
                    </div>
                </Card.Footer>
            </Card>
        );
    }
}
