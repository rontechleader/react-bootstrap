import React from "react";
import "./styles.css";
//import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import Buttons from '../src/components/Buttons';
import Cards from '../src/components/Cards';
import Dropdowns from '../src/components/Dropdowns';
import Containers from '../src/components/Containers';

export default function App() {
  return (
    <div className="App">
      <h1>Hello Contentstack ver. 13</h1>
      <hr />
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <Dropdowns />
      <hr />
      <Buttons />
      <hr />
      <Containers/>
      <hr />
      <Cards />
    </div>
  );
}
