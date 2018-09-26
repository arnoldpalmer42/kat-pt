import React, { Component } from "react";
import FitnessCard from "./FitnessCard";
import "../App.css";

class Background extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="container-bg">
            <img
              className="bg"
              src={
                "https://www.mypersonaltrainerwebsite.com/uploads/2/2/0/1/22014694/background-images/1471365614.png"
              }
            />
          </div>

          <div className="fitness-card">
            <FitnessCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
