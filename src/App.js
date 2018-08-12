import React, { Component } from "react";
import Name from "./Component/Name";
import Thru from "./Component/Thru";
import CardNumber from "./Component/CardNumber";
import CompanyName from "./Component/CompanyName";

import "./App.css";

class App extends Component {
  render() {
    let card ={
      company:"credit card",
      number:"7253 3256 7895 1245<",
      date:"11/50",
      name:"CARDHOLDER"

    } 


    return (
      <div className="card">
        <div className="title">
          <CompanyName Company={card.company} />
        </div>
        <div className="puce">
          <img className="sim" src={require("./img/sim.png")} alt="" />
        </div>
        <div className="info">
          <div className="numbers">
            <CardNumber CardNumber={card.number} />
            <div className="security">
              <div className="code">5422</div>
              <div className="date">
                <div className="format">month/year</div>
               <Thru Thru={card.date} />
              </div>
            </div>
           <Name  UserName={card.name} />
          </div>
          <div className="logo">
            <img src={require("./img/logo.jpg")} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
