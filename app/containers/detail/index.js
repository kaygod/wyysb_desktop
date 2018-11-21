import React ,{Component} from "react";
import {DetailWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from "./store/actions";

class DetailPage extends Component{

  constructor(props){
    super(props);
    this.state={
      id:null
    }
  }
  
  render(){
     console.log(this.props);
      return (
          <DetailWrapper>
            <p className="black">我是详情页</p>
            <Link to='/index'>回到首页</Link>
            <p>id是{this.state.id}</p>
            数字是:{this.props.number}
            <button onClick={this.props.add}>+</button>----<button onClick={this.props.del}>-</button>        
          </DetailWrapper>
      ) 
  }

  componentDidMount(){
    console.log(this.context.router.route.match.params.id);
    this.setState({
      id:this.context.router.route.match.params.id
    })


  }

}

const mapState = (state) => ({
  number: state.getIn(['detail','number'])
});

const mapDispatch = (dispatch) => ({
	add() {
    dispatch(actions.add());
  },  
  del(){
    dispatch(actions.del());
  }

});

DetailPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(mapState, mapDispatch)(DetailPage));
