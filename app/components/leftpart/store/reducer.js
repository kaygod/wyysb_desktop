import { fromJS } from 'immutable';
import * as constans from "./actionTypes"; 


const defaultState = fromJS({
    list:[{
        parent:"产品分类",
        active:true,
        child:[
            {
              name:"服务器",
              value:""
            },
            {
                name:"主板",
                value:""
            },
            {
                name:"存储",
                value:""
            },
            {
                  name:"GPU服务器",
                  value:""
            },
            {
                name:"CPU",
                value:""
            },
            {
                  name:"内存",
                  value:""
            },
            {
                name:"机箱",
                value:""
            },
            {
                  name:"电源",
                  value:""
            },
            {
                name:"HDD",
                value:""
            },
            {
                name:"SSD",
                value:""
            },
            {
                name:"GPU",
                value:""
            },
            {
                name:"RAID卡",
                value:""
            },
            {
                name:"网卡",
                value:""
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


