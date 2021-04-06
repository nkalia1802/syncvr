import React from 'react';
import {Row, Container} from "react-bootstrap";
import SimpleDateTime from "react-simple-timestamp-to-date";

export default function RequestBox(props) {

    const containerStyle = {
        border: '2px solid #4D3F3F'
    }

    return(
        <Container className="p-4" style={containerStyle}>
            <Row>Fibonacci number {props.value+1} = {props.value}</Row>
            <Row>
                <p>Time of access:</p>
                <SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{props.timestamp}</SimpleDateTime>
            </Row>
        </Container>
    )
}