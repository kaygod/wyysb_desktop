import React , {Component} from "react";
import {LeftPartWrapper} from "./style";
import { connect } from 'react-redux';
import * as actions from "./store/actions"; 

class LeftPartComponent extends Component{
    
    constructor(props){
      super(props);
      
      this.getChild=this.getChild.bind(this);

    }

    render(){
       return (
        
        <LeftPartWrapper>
             {
                 this.props.list.map((v,index)=>{
                     return ( 
                        <div key={index}>
                             {this.renderParent(v,index)}
                             {this.getChild(v,index)}
                       </div>
                     )
                 })
             }
        </LeftPartWrapper>

       ) 
    }

    renderParent(v,index){
     
        const {idx} =this.props;

        let class_name="parent";
        
        if(idx==index){
            class_name+=" current";
        }

        return (
          <p className={class_name} onClick={()=>{this.toggle(index)}}>{v.get("parent")}</p>
        )                        
        

    }

    toggle(index){
       
        const {list,idx} =this.props;

        if(idx==index){

            let flag=list.get(index).get("active");
            
                    flag=!flag;
                    
                    this.props.toggle({
                        index,
                        flag
                    });

        }else{

            let data=list.toJS();

            data.forEach((v)=>{
              v.active=false;
            })

            data[index].active=true;
             
            this.props.switch({
                data:data,
                index:index
            });

        }

    }

    getChild(v,index){  
       
      const {list,idx} =this.props;
        
        if(v.get("child") && list.get(idx).get("active")){


            let list=v.get("child").map((v2,index)=>{
                return (<li key={index}>{v2.get("name")}</li>);  
              }) 
            
            let class_name="child";
            
            if(!v.get("active")){
                class_name+=" hiding";
            }

         return  (
              <ul className={class_name}>
            
                 {list}
            
              </ul>
            ) 

        }else{
          return null;
        }

       

    }

}

const mapState = (state) => ({
    list: state.getIn(['leftpart','list']),
    idx: state.getIn(['leftpart','index'])
});

const mapDispatch = (dispatch) => ({
	toggle(data) {
	   dispatch(actions.toggle(data));
    },
    switch(data){
      dispatch(actions.switchTypeAction(data));
    }
});
  
export default connect(mapState, mapDispatch)(LeftPartComponent);
