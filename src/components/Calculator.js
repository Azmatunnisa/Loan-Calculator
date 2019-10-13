import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      amountValue: 500,
      monthsValue: 6
    };
  }
 

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ monthsValue: value });
  };




  render() {
    const { amountValue, monthsValue } = this.state;

    return (
      <div>
      <div className="App">
        <h4>Amount ${amountValue}</h4>


        
        <InputRange
          step={100}
          maxValue={5000}
          minValue={500}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Over {monthsValue} months
        </h4>
        <InputRange
          step={1}
          maxValue={24}
          minValue={6}
          value={monthsValue}
          onChange={this.handleYearChange}
        />
       
      </div>
      <div>
       <Display months={monthsValue} amount={amountValue}  />
       </div>
       </div>
    );
  }
}

export default Calculator;
