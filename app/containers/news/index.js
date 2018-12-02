import React ,{Component} from "react";
import {NewsWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { post } from "../../constants/util";
import LeftPartComponent from "../../components/leftpart";
import  WaitComponent from "../../components/wait";

class NewsPage extends Component{

  constructor(props){
    super(props);
    this.state={   
     isloading:false,
     isfirstload:true,
     list:[],
     brand_id:0,
     loaded:false
    }
  }
  
  render(){

    if(this.state.loaded){

      return (
        <NewsWrapper>
            <LeftPartComponent history={this.props.history}/>
              <div className="right">


                  <dl>
                      {
                         this.state.list.map((item,idx)=>{

                          return (
                             
                            <dd key={idx}>
                                  {this.renderContent(item)}
                            </dd>                            

                          )

                         })

                      }
                  </dl>

                        
              </div>           
        </NewsWrapper>
      )
    }else{
         
      return (
        
       <NewsWrapper>
          <LeftPartComponent history={this.props.history}/>
          <div className="right">
             <WaitComponent show={this.state.loaded} />
          </div>          
       </NewsWrapper>
     )

    }   
  }

  componentDidMount(){
    let brand_id=this.context.router.route.match.params.brand_id;
    this.init(brand_id);
  }

  componentWillReceiveProps(nextProps){ 
    this.init(nextProps.match.params.brand_id);
  }

  jump(item){
    this.props.history.push(`/newsdetail/${item.news_id}`);
  }

  renderContent(item){
        
   let num= item.icon_url.length;
   
   if(num){
      num=num.toString();
   }else{
     num="-1";
   }

   switch(num){
     
     case "1":

       return (
          
        <div className="line_one">
            <div className="boxin" onClick={()=>{this.jump(item.news_id)}}>
              <div className="intoimg">
                <img src={item.icon_url[0]} alt=""/>
              </div>
              <div className="teat">
                <p>{item.title}</p>
                <div>
                  <ol>
                    <li style={{display:(item.source===''?"none":"block")}}>{item.source}</li>                        
                    <li>{item.date.slice(0,10)}</li>
                    <li className="clear"></li>
                  </ol>
                  <i className="iconfont icon-icon-"></i>
                  <div className="clear"></div>
                </div>
              </div>
              </div>
          </div>

       );break;

     case "0":

        return (
            
          <div className="line_three line_two">
          <div className="boxin" onClick={()=>{this.jump(item.news_id)}}>
            <p>{item.title}</p>
            <div>
              <ol>
                <li style={{display:(item.source===''?"none":"block")}}>{item.source}</li> 
                <li>{item.date.slice(0,10)}</li> 
                <li className="clear"></li>                      
              </ol>
              <i className="iconfont icon-icon-"></i>
              <div className="clear"></div>
            </div>
          </div>
        </div>

        );break;

     default:
     
        return (
            
          <div className="line_two">
            <div className="boxin" onClick={()=>{this.jump(item.news_id)}}>
              <p>{item.title}</p>
              <ul>
                 {
                   item.icon_url.map((item2,index)=>{
                     return (
                      <li key={index}><img src={item2} alt=""/></li>                      
                     )
                   })

                 }
              </ul>
              <div>
                <ol>
                  <li style={{display:(item.source===''?"none":"block")}}>{item.source}</li>
                  <li>{item.date.slice(0,10)}</li>
                  <li className="clear"></li>
                </ol>
                <i className="iconfont icon-icon-"></i>
                <div className="clear"></div>
              </div>
            </div>
        </div>

           

        );break;


   }
     

  }

  jump(id){
   this.props.history.push(`/newsdetail/${id}`);
  }

  async init(brand_id){
    await this.setStateAsync({
      brand_id:brand_id,
      loaded:false
    })

    
    let user_id=0;
     
    let params={user_id:user_id,page_no:1,brand_id:this.state.brand_id};
    post("/video_service/news/get_list",params).then((data)=>{
      
            let list=data.msg_list;
            let isloading=false;
            let isfirstload=false;
            this.setState({
              list,
              isloading,
              isfirstload,
              loaded:true
            })
    })
      

  }

  setStateAsync=(state)=>{
    
   return new Promise((resolve) => {
     this.setState(state, resolve)
   });
 
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

NewsPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(null, null)(NewsPage));
