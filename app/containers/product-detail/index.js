import React ,{Component} from "react";
import {ProductDetailWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { post } from "../../constants/util";
import LeftPartComponent from "../../components/leftpart";

class ProductDetailPage extends Component{

  constructor(props){
    super(props);
    this.state={   
      product_name:"",
      product_parent_type:"",
      type:"",
      product_id:"",
      curpage:1,
      finalpage:0,
      comparecount:0,
      showloading:true,
      isanimating:false,
      addanimate:"editwarn1",
      datalist:[],
      alltypeid:[],//对某品牌进行查询获得的所有的类型id的集合
      comparelist:[]

    }
    
    this.jump=this.jump.bind(this);

  }
  
  render(){
      return (
        <ProductDetailWrapper>
            <LeftPartComponent history={this.props.history}/>
              <div className="right">
                    
                  
              <ul className="procompare_list">
                  
                  {
                    ((flag)=>{
                      if(flag){
                        return (
                            
                          <li className="procompare_title">
                             {this.state.product_name}
                          </li>

                        )
                      }else{
                        return null;
                      }
                    })(this.state.product_name?true:false)
                  }
               
                  {
                    this.renderList()
                  }


                </ul>

                  


              </div>           
        </ProductDetailWrapper>
      ) 
  }

  componentDidMount(){
    this.init();
  }

  renderList(){
     
     return this.state.datalist.map((item,index)=>{
           
         return (
             
          <li className="procompare_item" key={index} onClick={()=>{this.jump(item)}}>
            <div className={`box ${item.ext_info!==''?"ma_box":"other_box"}`}>
              <a>
                <p className="serialsize">{item.serial_num}</p>
                {
                    ((flag)=>{
                    if(flag){
                      return <p className="blue_word">&#40;<span>{item.ext_info}</span>&#41;</p>;
                    }else{
                      return null;
                    }
                  })(item.ext_info!=='')
               }
              </a>
            </div>
        
        </li>

         ) 

     })

  

  }

  setStateAsync=(state)=>{
    
   return new Promise((resolve) => {
     this.setState(state, resolve)
   });
 
 }


  jump(item){
    this.props.history.push(`/product-parameter/${this.state.product_parent_type}/${item.product_id}`);
   }
 

  async init(){

    let product_name=this.context.router.route.match.params.product_name;
    if(product_name=="undefined"){
      product_name=null;
    }
    let product_parent_type=this.context.router.route.match.params.product_type;
    let product_id=this.context.router.route.match.params.product_id;

    await this.setStateAsync({
      product_name,
      product_parent_type,
      product_id
    })

    this.service_init();

  }

 

 

  typeidmap(input){
    input=input.toString();
    switch (input)
    {
      case "9":return 20;
      case "10":return 21;
      case "8":return 19;
      case "1":return 11;
      case "53":return 12;
      case "2":return 13;
      case "3":return 14;
      case "4":return 15;
      case "5":return 16;
      case "6":return 17;
      case "7":return 18;
      case "11":return 277;
      case "13":return 298;
      case "12":return 295;
      case "22":return 22;
      case "23":return 23;
    }
  }

  service_init(){//初次加载

           let _this=this;
           let params={product_type:this.state.product_parent_type,type_id:this.state.product_id,page_no:1};
           post("/product_list/type",params).then((res)=>{
              res.product_list.forEach((v)=>{
                    v.in_compare=1;//1表示没有加入对比,2表示已经加入了对比 
              })
              let datalist=res.product_list;
              let finalpage=res.total_page;      

              _this.setState({
                datalist,
                finalpage
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

ProductDetailPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(null, null)(ProductDetailPage));
