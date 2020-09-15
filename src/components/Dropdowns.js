import React, { Component } from 'react';
import {
    DropdownButton,
    Dropdown
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";



class Dropdowns extends Component {
    render() {
        return (
            <div>
                <DropdownButton
                    id="dropdown-basic-button"
                    variant="secondary"
                    title="Action"
                >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }
}

export default Dropdowns;