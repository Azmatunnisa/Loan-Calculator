import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
export class SideBar extends Component{

    componentDidMount(){
        console.log("Props ",this.props);
      }

    render(){

        return(

           <Nav style={{textAlign:'right'}} vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
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