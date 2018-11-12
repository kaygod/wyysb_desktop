import { fromJS } from 'immutable';
import * as constans from "./actionTypes"; 


const defaultState = fromJS({
    list:[],
    nodelist:[],
    boardlist:[],
    recommendlist:[]
});

export default (state = defaultState, action) => {
    switch(action.type){
      case constans.GET_COLLECTIONS: 
          return state.set("list",action.value);break;
      case constans.GET_NOTELIST: 
          return state.set("nodelist",action.value);break;
      case constans.GET_BOARDLIST: 
          return state.set("boardlist",action.value);break;
      case constans.GET_RECOMMENDLIST: 
          return state.set("recommendlist",action.value);break;              
      default: return state; 
    }

}


