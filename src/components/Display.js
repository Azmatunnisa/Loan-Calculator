import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";
import SideBar from './SideBar';
import "../styles/Calculator.css";

class Display extends Component {

constructor(props)
{
  super(props);
  

  let entries = Object.entries(localStorage);
  //console.log("Entries ", entries.length);

 

  this.state = {
    
    data:[],
    monthlyPayment:'',
   
    count:entries.length,
    dataArray:[]
  };
}
 

  componentDidMount() {
    


    fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+this.props.amount+'&numMonths='+this.props.months ,{
      method:'GET',  
    }).then((response) => response.json())
    .then((responseJson) => {


      var list = [];
      for (var i = 0; i < localStorage.length; i++){
       list =localStorage.getItem(localStorage.key(i));
     
       this.state.dataArray.push(list);
    }
      
 this.setState({
  data:responseJson,
  monthlyPayment:responseJson.monthlyPayment.amount,
  
  
  
}) ;

      })
    this.dynamicResults();
   
}




saveToLocal() {
  const local = this.props;
  
this.setState({
  count: this.state.count+1
})


localStorage.setItem( this.state.count,JSON.stringify(local));
 
 
  
}



  componentDidUpdate(prevProps) {



    if (prevProps !== this.props) {
      
      this.dynamicResults();
      this.saveToLocal();
     
      let a= this.props;
      this.state.dataArray.push(a);
console.log("Data array ",this.state.dataArray);

    }
  }

  dynamicResults = () => {

   
    const { amount, months } = this.props;
    fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+amount+'&numMonths='+months ,{
      method:'GET',  
    }).then((response) => response.json())
    .then((responseJson) => {
    
      
  this.setState({
  data:responseJson,
  monthlyPayment:responseJson.monthlyPayment.amount
}

)  
  
  })
}


 
 rateOfInterest = () => {
    return <p>{this.state.data.interestRate }</p>;
  };
monthly = () => {
return <p>{this.state.monthlyPayment}</p>;

}; 

  render() {
     
    return (
    
 <div>
   <div>
<SideBar foo={this.state.dataArray}></SideBar>
</div> 
      <div className="App">
        <DisplayChild text="interest rate" func={this.rateOfInterest()} />
         <DisplayChild text="monthly payment" func={this.monthly()}/>  

      
      </div>
      
</div>    
    );
  }
}

Display.propTypes = {
  months: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
