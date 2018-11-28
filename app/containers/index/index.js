import React ,{Component} from "react";
import {IndexWrapper} from "./style";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import path from "path";
import LeftPartComponent from "../../components/leftpart";

let servicer = require('../../assets/images/servicer.png');
let mainboard = require('../../assets/images/mainboard.png');
let storage = require('../../assets/images/storage.png');
let graph = require('../../assets/images/graph.png');
let CPU = require('../../assets/images/CPU.png');
let memory = require('../../assets/images/memory.png');
let crate = require('../../assets/images/crate.png');
let power = require('../../assets/images/power.png');
let HDD = require('../../assets/images/HDD.png');
let SSD = require('../../assets/images/SSD.png');
let GPU = require('../../assets/images/GPU.png');
let Raid_Cards= require('../../assets/images/Raid_Cards.png');
let Network_Cards= require('../../assets/images/Network_Cards.png');


class App extends Component{
  
  render(){
    
      return (
          <IndexWrapper>

             <LeftPartComponent history={this.props.history}/>

        <div className="right">
                 
              <div className="product_list">


              <div className="box">
              <a onClick={()=>{this.jump(20)}}>
                <div>
                  <p><img src={servicer} alt=""/></p>
                  <span>Servers</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(11)}}>
                  <div>
                    <p><img src={mainboard} alt=""/></p>
                    <span>Boards</span>
                  </div>
              </a>
              <a  onClick={()=>{this.jump(19)}}>
                <div>
                  <p><img src={storage} alt=""/></p>
                  <span>Storage</span>
                </div>
              </a>
              <a onClick={()=>{this.jump(21)}}>
                <div>
                  <p><img src={graph} alt=""/></p>
                  <span className="int">GPU 服务器</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(12)}}>
                  <div>
                    <p><img src={CPU} alt=""/></p>
                    <span>Processors</span>
                  </div>
              </a>
              <a  onClick={()=>{this.jump(13)}}>
                <div>
                  <p><img src={memory} alt=""/></p>
                  <span>Memory</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(17)}}>
                <div>
                  <p><img src={crate} alt=""/></p>
                  <span>Chassis</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(16)}}>
                <div>
                  <p><img src={power} alt=""/></p>
                  <span>Power Supplies</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(15)}}>
                <div>
                  <p><img src={HDD} alt=""/></p>
                  <span>HDD机械硬盘</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(14)}}>
                <div>
                  <p><img src={SSD} alt=""/></p>
                  <span>SSD固态硬盘</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(277)}}>
                <div>
                  <p><img src={GPU} alt=""/></p>
                  <span>GPU显卡</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(298)}}>
                <div>
                  <p><img src={Raid_Cards} alt=""/></p>
                  <span>Raid Cards</span>
                </div>
              </a>
              <a  onClick={()=>{this.jump(295)}}>
                <div>
                  <p><img src={Network_Cards} alt=""/></p>
                  <span>Network Cards</span>
                </div>
              </a>

              </div>
            
            </div>
          
        </div>



      
           
          </IndexWrapper>
      ) 
  }

  jump(id){
    
    this.props.history.push(`/catagory/${id}`);

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


export default withRouter(connect(null, null)(App));
