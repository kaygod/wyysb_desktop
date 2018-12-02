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
        ],
        url:"/catagory/"
    },{
        parent:"行业咨询",
        active:false,
        child:[
            {
                value:0,
                name:"热点"
              },
            {
                value:6,
                name:"板卡"
              },{
                value:2,
                name:"机箱电源"
              },{
                value:19,
                name:"HDD"
              },{
                value:10,
                name:"显卡"
              },{
                value:11,
                name:"内存"
              },{
                value:1,
                name:"SSD"
              },{
                value:7,
                name:"CPU"
              },{
                value:13,
                name:"交换机"
              },{
                value:14,
                name:"路由器"
              },{
                value:20,
                name:"UPS"
              },{
                value:4,
                name:"服务器"
              },{
                value:15,
                name:"存储"
              },{
                value:16,
                name:"GPU服务器"
              },{
                value:17,
                name:"ASIC矿机"
              },{
                value:21,
                name:"GPU/CPU矿机"
              },{
                value:18,
                name:"云计算"
              }
        ],
        url:"/news/"
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


