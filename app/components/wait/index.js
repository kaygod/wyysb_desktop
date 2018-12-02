import React , {Component} from "react";
import {WaitWrapper} from "./style";

let load=require("../../assets/images/timg.gif");

class WaitComponent extends Component{

   constructor(props){
     super(props);
   }
  
    render(){
       return this.renderContent();
    }

   renderContent(){

    if(!this.props.show){
      
      return (
       <WaitWrapper>
          <img src={load} />
       </WaitWrapper>
      )

    }else{
      return null;
    }

   }

     

}

export default WaitComponent;