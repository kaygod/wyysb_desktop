import { fromJS } from 'immutable';
import * as constans from "./actionTypes"; 


const defaultState = fromJS({
    list:[{
        parent:"产品分类",
        active:true,
        child:[
            {
              name:"服务器",
              value:"20"
            },
            {
                name:"主板",
                value:"11"
            },
            {
                name:"存储",
                value:"19"
            },
            {
                  name:"GPU服务器",
                  value:"21"
            },
            {
                name:"CPU",
                value:"12"
            },
            {
                  name:"内存",
                  value:"13"
            },
            {
                name:"机箱",
                value:"17"
            },
            {
                  name:"电源",
                  value:"16"
            },
            {
                name:"HDD",
                value:"15"
            },
            {
                name:"SSD",
                value:"14"
            },
            {
                name:"GPU",
                value:"277"
            },
            {
                name:"RAID卡",
                value:"298"
            },
            {
                name:"网卡",
                value:"295"
            }
        ]
    },{
        parent:"行业咨询"
    }],
    index:0
});

export default (state = defaultState, action) => {
    switch(action.type){
      case constans.UPDATE_FLAG: 
          return state.setIn(["list",action.value.index,"active"],action.value.flag);break;
      case constans.SWITCH_ITEM:
          return state.set("list",action.value);
      case constans.UPDATE_INDEX:
          return state.set("index",action.value);                     
      default: return state; 
    }

}


