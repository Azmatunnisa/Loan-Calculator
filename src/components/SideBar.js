import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
export class SideBar extends Component{

  state={
    localArray:[],
    storageLength:''
   
  }

    componentDidMount(){
    
      for (var i = 0; i < localStorage.length; i++){
       var item =localStorage.getItem(localStorage.key(i));
       
        this.state.localArray.push(item);
      }

        console.log("List ",this.state.localArray);
      }

      componentDidUpdate()
      {
        var storageLength = localStorage.length;

        console.log(localStorage.length);
        
        
        if(localStorage.length!==this.state.storageLength)
        {

          var updatedArray=[];
        
          for (var i = 0; i < localStorage.length; i++){
            var singleItem =localStorage.getItem(localStorage.key(i));
            
            updatedArray.push(singleItem);
           }
          
            this.setState({
              localArray:updatedArray,
              storageLength
           })
         
           
        }
        
        
        console.log("in did update ",this.state.localArray);
      }

    render(){

        return(

           <Nav style={{textAlign:'right'}} vertical>
        <NavItem>
          <NavLink href="#">{this.state.localArray}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
        )
    }
}

export default SideBar;