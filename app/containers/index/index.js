import React ,{Component} from "react";
import {IndexWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import path from "path";

let logo = require('../../assets/images/2.jpg');

class App extends Component{
  
 

  render(){
    
      return (
          <IndexWrapper>
            <p className="red">我是首页</p>  
            <Link to="/detail/10086">我要去详情页</Link>
            <p>数字是多少:{this.props.number}</p>
            <img src={logo} width="120" height="140" alt=""/>    
          </IndexWrapper>
      ) 
  }

}

const mapState = (state) => ({
  number: state.getIn(['detail','number'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
	
	}
});

App.contextTypes = {
  router: PropTypes.object.isRequired
}


export default connect(mapState, null)(App);
