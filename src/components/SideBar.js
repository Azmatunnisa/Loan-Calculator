import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
export class SideBar extends Component{

  state={
    localArray:[],
    storageLength:''
   
  }

 

    componentDidMount(){

      var storageLength = localStorage.length;
    
      for (var i = 0; i < localStorage.length; i++){
       var item =localStorage.getItem(localStorage.key(i));
       
        this.state.localArray.push(item);
      }

      this.setState({
        storageLength
     })

        console.log("List ",this.state.localArray);
        console.log("o length",storageLength)
        console.log("length of storage",this.state.storageLength);
      }

      componentDidUpdate()
      {
        var storageLength = localStorage.length;
        console.log("component did update",storageLength);
        console.log("did update state length",this.state.storageLength);
        
        
        if(storageLength!==this.state.storageLength)
        {
          console.log("in if condition");

          var updatedArray=[];
        
          for (var i = 0; i < localStorage.length; i++){
            var singleItem =localStorage.getItem(localStorage.key(i));
            
            updatedArray.push(singleItem);
           }
          
            this.setState({
              localArray:updatedArray,
              storageLength
           })
         
           console.log("in did update ",this.state.localArray);
        }
        
        
        
      }


      historyList=()=>{
        return this.state.localArray.map( (data)=>(
              console.log("data in map function",data)
          )
            
          
        )
      }

    render(){

      return this.state.localArray.map((data,index)=>(

        <div key={index}>
        <ScrollArea>
          <div>
           <p>{JSON.parse(data.months)}</p>   
          </div>
        </ScrollArea>
        </div>

      ));
    
    }
}

export default SideBar;