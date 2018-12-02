import React ,{Component} from "react";
import {NewsDetailWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { post } from "../../constants/util";
import LeftPartComponent from "../../components/leftpart";
import  WaitComponent from "../../components/wait";

class NewsDetailPage extends Component{

  constructor(props){
    super(props);
    this.state={   
     user_id:0,
     news_id:"",
     detailData:null,
     loaded:false
    }
  }
  
  render(){
     
      let {detailData}= {...this.state};
      
      if(this.state.loaded){

        return (
          <NewsDetailWrapper>
              <LeftPartComponent history={this.props.history}/>
                <div className="right">
                 {
                   detailData
                   ?
                   (
                      <div className="allhotnews">
                        <dl className="matterbox">
                          <div className="tit">{detailData.title}</div>
                          <div className="date"><span>{detailData.source}</span>{detailData.date.slice(0,10)}</div>                   
                          <div className="newsword"  dangerouslySetInnerHTML={{__html:detailData.article_intro}}></div>
                          <div className="looknums">{detailData.read_time}人已阅</div>                 
                        </dl>               
                      </div>
                   ):null
                }
  
                </div>           
          </NewsDetailWrapper>
        ) 

      }else{

        return (
          
         <NewsDetailWrapper>
            <LeftPartComponent history={this.props.history}/>
            <div className="right">
               <WaitComponent show={this.state.loaded} />
            </div>          
         </NewsDetailWrapper>
       )


      }  

     
  }

  componentDidMount(){
    this.init();
  }

  componentWillReceiveProps(nextProps){
    this.init();
  }

  async init(){

    let news_id=this.context.router.route.match.params.news_id;
    await this.setStateAsync({
      news_id:news_id,
      loaded:false
    })
    
    this.getContent();

  }

  getContent(){
    
    let params={user_id:this.state.user_id,news_id:this.state.news_id};  
    let _this=this;
   post("/video_service/news/detail",params).then((data)=>{
          
          _this.setState({
            detailData:data,
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

NewsDetailPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(null, null)(NewsDetailPage));
