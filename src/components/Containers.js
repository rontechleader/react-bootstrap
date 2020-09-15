import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
class Containers extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row variant="primary">
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    {Container.title}
                    <Row className="Row">
                        <Col xs>First, but unordered</Col>
                        <Col className="Sehaj" xs={{ order: 12 }}>
                            Second, but last
          </Col>
                        <Col className="Ron" xs={{ order: 1 }}>
                            Third, but second
          </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Containers;