import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Parent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      amountValue: 500,
      monthsValue: 6,
      data:[],
      monthlyPayment:'',
      count:1
    };
  }
 

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ monthsValue: value });
  };

  componentDidMount() {
    


    fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+this.state.amountValue+'&numMonths='+this.state.monthsValue ,{
      method:'GET',  
    }).then((response) => response.json())
    .then((responseJson) => {


       

        this.setState({
            data:responseJson,
            monthlyPayment:responseJson.monthlyPayment.amount,
            
            
            
          }) ;
          

      })
   this.dynamicResults();
   
}



componentDidUpdate(prevProps) {



    if (this.state.count<2) {
      
      this.dynamicResults();
    console.log(this.state.data);

    }
  }

dynamicResults = () => {

   
    const { amountValue, monthsValue } = this.state;
    fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+amountValue+'&numMonths='+monthsValue ,{
      method:'GET',  
    }).then((response) => response.json())
    .then((responseJson) => {
    
      
        this.setState({
            data:responseJson,
            monthlyPayment:responseJson.monthlyPayment.amount,

            count:2
          }) 


  
 
})
}




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
     {/*  <div>
       <Display months={monthsValue} amount={amountValue}  />
       </div> */}
       </div>
    );
  }
}

export default Parent;
