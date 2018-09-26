import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "../App.css";

const Example = props => {
  return (
    <div>
      <Jumbotron className="bg-info">
        <h1 className="display-3 header-title">Kat Personal Training</h1>
        <h3 className="lead jumbo-text">Get in shape with Kat!</h3>
        <p className="lead jumbo-text">
          <Button color="secondary" className="header-button">
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
