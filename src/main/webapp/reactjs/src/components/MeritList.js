import React from "react";
import { Card, Table } from "react-bootstrap";

export default class MeritList extends React.Component {
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
                            <th>Registered Name</th>
                            <th>Registered Mobile</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>

                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        );
    }
}
