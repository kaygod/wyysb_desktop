import React ,{Component} from "react";
import {CatoryWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { post,typeidmap } from "../../constants/util";

import LeftPartComponent from "../../components/leftpart";

class CatagoryPage extends Component{

  constructor(props){
    super(props);
    this.state={
     type_id:0,
     product_parent_type:0,
     type_name:"",
     alllayer:0,//总共有几级
     data:null//总数据的类型
    }
  }
  
  render(){
   
      return (
      <CatoryWrapper>
          <LeftPartComponent history={this.props.history}/>
            <div className="right">

                        {
                    ((boolean)=>{
                        if(boolean){
                          
                        return (

                          <div className="tabin">
                            {
                                this.data.map((item,index)=>{
                                  return (

                                    <div className={`${item.active?"curr":""}`} onClick={()=>{this.titleswitch(item,index)}}>{item.type_name}</div>                        

                                  )
                                })
                            }
                          </div>

                        )

                        }else{
                          return;
                        }
                    })(this.alllayer>=3)
                  }        
            
                  
                  {this.renderContent()}

            </div>           
          </CatoryWrapper>
      ) 
  }

  titleswitch(item,index){
    let data=[...this.state.data];
    data.forEach(function(v){
      v.active=false;
    })
    data[index].active=true;
    if(item.child_list===undefined)
    {
      this.setState({
        data
      })
      this.renderNext(item.type_id,1,1);
    }else{
      this.setState({
        data
      })
    }

  }

  listswitch(item2,parentid){//3级时对列表进行点击
    item2.active= !item2.active;
    let data=[...this.state.data];
    this.setState({
      data
    })
    if(item2.active==true && item2.child_list===undefined && item2.flag!==1)
    {
      this.renderNext(item2.type_id,2,parentid);
    }
  }

  secondlistswitch(item){
    item.active= !item.active;
    let data=[...this.state.data];
    this.setState({
      data
    })
    if(item.active==true && item.child_list===undefined && item.flag!==1)
    {
      this.service.renderNext(item.type_id,1,1);
    }
  }

  gonextpage(item3){
    let product_parent_type=typeidmap(this.state.type_id);
    this.props.history.push(`/product-detail/${product_parent_type}/${item3.type_id}/${item3.type_name}`); 
  }

  componentDidMount(){
     this.init();
  }
   
  setStateAsync=(state)=>{
    
   return new Promise((resolve) => {
     this.setState(state, resolve)
   });
 
 }

  async init(){
    let type_id=this.context.router.route.match.params.id;
    await this.setStateAsync({
      type_id:type_id
    })
    this.renderFun();  
  }


  renderContent(){

     let alllayer=this.state.alllayer.toString();

     switch(alllayer)
 {
   case "3":
           
   return (

     <div>
        {
          this.state.data.map((item,idx)=>{

            return (
                 
            <dl key={idx} className="pro_list_two" style={{display:item.active?'block':'none'}}>
              { item.child_list && item.child_list.map((item2,i)=>{
                    
                                       return (
                                           
                                        <dd key={i}>
                                        <div className={`in_one ${item2.active?"curr":""}`} onClick={()=>{this.listswitch(item2,item.type_id)}}>
                                          <i className="iconfont icon-xinwenliebiaodianzhui"></i>
                                          <div>{item2.type_name}</div>
                                        </div>
                                        <div className="in_two" style={{display:item.active?'block':'none'}}>
                                          <ol>
                                            {
                                               item2.child_list && item2.child_list.map((item3,index)=>{
                                                  return (
                                                    <li  key={index} onClick={()=>{this.gonextpage(item3)}}>{item3.type_name}</li>                                
                                                  )
                                               })
                                            }
                                          </ol>
                                        </div>
                                        </dd>
                    
                                       )
                    
                          })

                }             
            </dl>


            )

          })
        }
       
    </div>

   );
           

   case "2":
      
      return (

        <dl className="pro_list_two">
        <dt>{this.state.type_name}</dt>
        {
           this.state.data.map((item,idx)=>{
             return (
                
              <dd key={idx}>
                <div className={`n_one ${item.active?"curr":""}`} onClick={()=>{this.secondlistswitch(item)}}>
                  <i className="iconfont icon-xinwenliebiaodianzhui"></i>
                  <div>{item.type_name}</div>
                </div>
                <div className="in_two" style={{display:item.active?'block':'none'}}>
                  {
                    item.child_list && item.child_list.map((item2,i)=>{
                       return (
                        <ol key={i} onClick={()=>{this.gonextpage(item2)}}>
                          <li>{item2.type_name}</li>
                        </ol>
                       )
                    })
                  }
                </div>
            </dd>

             )
           })
        }
  
      </dl>

      );
   
   case "1":
      return (

        <dl className="pro_list_two">
        <dt>{this.state.type_name}</dt>
        {
          this.state.data.map((item)=>{
             return (
              <dd onClick={()=>{this.gonextpage(item,1)}} key={item.type_id}>
              <div className={`n_one ${item.active?"curr":""}`}>
                <i className="iconfont icon-xinwenliebiaodianzhui"></i>
                <div>{item.type_name}</div>
              </div>
             
            </dd>

             )
          })
        }
      </dl>

      );

    }    

  }

   
renderFun(){
       
       let params={type_id:this.state.type_id};
       let _this=this;
       post("/type_list/msg",params).then(async (res)=>{
            let type_name=res.type_name;
            let product_parent_type=res.product_parent_type;
            let alllayer=res.total_level;
             if(res.total_level==1)//只有一层
             {
                 let data=res.child_list;
                 await _this.setStateAsync({
                  type_name,
                  product_parent_type,
                  alllayer,
                  data
                 })
             }else if(res.total_level==2)//有2层
             {
               res.child_list.forEach((item)=>{
                  item.active=false;
               })
               let data=res.child_list;
               await _this.setStateAsync({
                type_name,
                product_parent_type,
                alllayer,
                data
               }) 
              
             }else if(res.total_level==3)//有3层
             {
    
               res.child_list.forEach((item)=>{
                 item.active=false;
               })
               if(res.child_list.length>0)
               {
                 res.child_list[0].active=true;
                 let data=res.child_list;
                 await _this.setStateAsync({
                  type_name,
                  product_parent_type,
                  alllayer,
                  data
                 }) 
                 this.renderNext(res.child_list[0].type_id,1,1);           
               }
             }
        })


  }
  
  
  async renderNext(type_id,index,parent_id){
    if(!index)
    {
      index=1;
    }
    
    let data=[...this.state.data];
    
    let _this=this;

    if(index==1)//从第一级生成第二级
    {

      for(var i=0;i<this.state.data.length;i++){

        if(this.state.data[i].type_id==type_id)
        {

          var x=i;

          if(this.state.data[i].child_list===undefined)//需要请求数据
          {

           let params={type_id:type_id};

           post("/type_list/msg",params).then(async (res)=>{
                               
             data[x].child_list=res.child_list;

             data[x].active=true;
              
             await _this.setStateAsync({
               data:data
             }) 

           })  
        
          }else{//数据已经请求过来了

            if(this.state.alllayer==2)//当为2层时
            {
              data[i].active =!data[i].active;
              await _this.setStateAsync({
                data:data
              }) 
            }else if($scope.alllayer==3){//当为3层时
              data.forEach(function(v){
                 v.active=false;
              })
              data[i].active=true;
              await _this.setStateAsync({
                data:data
              }) 
            }

          }
          break;
        }

      }


    }else if(index==2){//从2级生成3级

      if(!parent_id)
      {
        parent_id=1;
      }
      var arr=[];
      for(var i=0;i<data.length;i++)
      {
         if(data[i].type_id==parent_id)
         {
           arr=data[i].child_list;
           break;
         }
      }
      for(var i=0;i<arr.length;i++)
      {
        if(arr[i].type_id==type_id)
        {
            var j=i;
            if(arr[i].child_list===undefined){//需要请求第三极的数据

             
             var params={type_id:type_id};

            post("/type_list/msg",params).then((res)=>{

                arr[j].child_list=res.child_list;
                arr[j].active=true;              

              })

            }else{//不需要请求
              arr[i].active=!arr[i].active;
            }
            await _this.setStateAsync({
              data:data
            }) 
          break;
        }
      }


    }
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

CatagoryPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(null, null)(CatagoryPage));
