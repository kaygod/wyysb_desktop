import React ,{Component} from "react";
import {ProductParameterWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { post } from "../../constants/util";
import LeftPartComponent from "../../components/leftpart";
import  WaitComponent from "../../components/wait";

let default2 = require('../../assets/images/default2.jpg');

class ProductParameterPage extends Component{

  constructor(props){
    super(props);
    this.state={   
      product_name:"",
      base_parameters:[],
      product_parameters:[],
      product_parent_type:"",
      product_id:"",
      bigimgs:[],
      icon:"",
      showbig:false,
      rightarrow:false,
      curidx:1,
      totalidx:1,
      allscrollimgs:[],
      hasline:false,
      loaded:false
    }
  }
  
  render(){
     
    if(this.state.loaded){

      return (
        <ProductParameterWrapper>
            <LeftPartComponent history={this.props.history}/>
              <div className="right">
                         
                            {this.renderHeader()}


                              <div className="product_detail_item">
                                <div className="product_detail_item_title box" onClick={this.toggle} data-state="on">
                                  <div className="lt">基本参数</div>
                                  <p className="gt">                       
                                    <i className="iconfont hiding">&#xe64d;</i>
                                    <i className="iconfont">&#xe6a1;</i>
                                  </p>
                                </div>
                                <div className="product_detail_item_body">
                                  
                                  {
                                     
                                      this.state.base_parameters.map((item,idx)=>{

                                        return (
                                        <div className="box" key={idx}>
                                            <p className="lt">{item.key_name}</p>
                                            <div className="gt">{item.value}</div>
                                        </div>
                                        )
                                           
                                      })

                                  }

                                 
                                </div>
                              </div>

                             
                             {
                               
                               this.state.product_parameters.map((item,index)=>{
                                
                                
                                        return (
                                           <div className="product_detail_item" key={index}>                                       
                                             {this.renderContent(item)}                                   
                                           </div>
                                           )
                                            
                                           
                                
                                
                                       })
                                

                             }
                             


                  
      
              </div>           
        </ProductParameterWrapper>
      )
    }else{
          
      return (
        
       <ProductParameterWrapper>
          <LeftPartComponent history={this.props.history}/>
          <div className="right">
             <WaitComponent show={this.state.loaded} />
          </div>          
       </ProductParameterWrapper>
     )

    }  
      
  }

  componentDidMount(){
    this.init();
  }

  renderHeader(){
          
    return (
          <div className="product_detail_content">
              <div className="product_detail_header">
                <div>
                  <p className="lt">{this.state.product_name}</p>
                    <div className="rightimgs gt">
                      <div className="box">
                        <img src={this.state.icon?this.state.icon:default2} />
                      </div>
                    </div>
                </div>
              </div>
              <div className="clear"></div>
          </div>
        )
  }


  renderContent(item){
   
   let catogory_number=item.model.toString();

   switch(catogory_number){

   
    case "2":

         return (

          <div>
              <div className="product_detail_item_title box" onClick={this.toggle} data-state="on">
                <div className="lt">{item.key_name}</div>
                <p className="gt">
                <i className="iconfont hiding">&#xe64d;</i>
                <i className="iconfont">&#xe6a1;</i>
                </p>
              </div>
              <div className="product_detail_item_body">
                {
                  item.child_list.map((itemc,index)=>{
                         
                    return (
                    <div className="box" key={index}>
                      <p className="lt">{itemc.key_name}</p>
                      <div className="gt" dangerouslySetInnerHTML={{__html:itemc.value}}></div>
                    </div>
                    )

                  })
                }
               
              </div>
           </div>

         );break;

    case "3":
        
         return (

          <div>
            {
              item.child_list.map((itemc,idx)=>{

              return  (
                <div key={idx}>
                    <div className="product_detail_item_title box" onClick={this.toggle} data-state="on">
                      <div className="lt">{item.key_name}({itemc.key_name})</div>
                      <p className="gt">
                      <i className="iconfont hiding">&#xe64d;</i>
                      <i className="iconfont">&#xe6a1;</i>
                      </p>
                    </div>
                    <div className="product_detail_item_body">
                      {
                        itemc.grand_list.map((itemd,index)=>{
                         
                          return (
                            <div className="box" key={index}>
                              <p className="lt">{itemd.key_name}</p>
                              <div className="gt" dangerouslySetInnerHTML={{__html:itemd.value}}></div>
                            </div>
                          )
                        
                        })
                      }                    
                    </div>
                  </div>
                  )        

              })
            }          
          </div>
         );break;


   }   



  }


  setStateAsync=(state)=>{
    
   return new Promise((resolve) => {
     this.setState(state, resolve)
   });
 
 }

  async init(){
   
    let product_parent_type=this.context.router.route.match.params.product_parent_type;
    let product_id=this.context.router.route.match.params.product_id;

    await this.setStateAsync({
      product_parent_type,
      product_id,
      loaded:false
    })

    this.service_init(product_parent_type,product_id);
    

  }

   toggle($event){
    
           var target=$event.target;
            if(target.nodeName!="DIV"){
              target= target.parentElement.parentElement;
            }else{
               if(target.classNameName=="lt"){
                target= target.parentElement;
               }
            }
           if(target.getAttribute("data-state")=="on")//收起
           {
             target.querySelectorAll(".iconfont")[0].style.display="block";
             target.querySelectorAll(".iconfont")[1].style.display="none";
             target.setAttribute("data-state","off");
             target.nextElementSibling.style.display="none";
           }else{//打开       
            target.querySelectorAll(".iconfont")[0].style.display="none";
            target.querySelectorAll(".iconfont")[1].style.display="block";
            target.setAttribute("data-state","on");
            target.nextElementSibling.style.display="block";
           }
    
    
  }
 
  service_init(product_parent_type,product_id){

      let params={product_parent_type:product_parent_type,product_id:product_id};

      post("/product/msg",params).then((res)=>{    
          let product_name=res.product_name;
          let icon=res.icon;
          let arrs=res.icon_list.map(function(v){
            return {
              src:v,
              w:870,
              h:428
            }
          });
          let base_parameters=res.base_parameters;
          let product_parameters=res.product_parameters;
          let rightarrow=true;
          let bigimgs=arrs;
          
          this.setState({
            product_name,
            icon,
            base_parameters,
            product_parameters,
            rightarrow,
            bigimgs,
            loaded:true
          }) 

      })
  
    

  }
 

  

  


}

const mapState = (state) => ({
  data: state.getIn(['catogory','data'])
});

const mapDispatch = (dispatch) => ({
	getData(data) {
    dispatch(actions.getData(data));
  }

});

ProductParameterPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(null, null)(ProductParameterPage));
