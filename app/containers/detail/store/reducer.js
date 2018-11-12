import { fromJS } from 'immutable';
import * as constans from "./actionTypes"; 


const defaultState = fromJS({
  number:0
});

export default (state = defaultState, action) => {
    switch(action.type){ 
      case "ADD": 
          return state.set("number",state.get("number")+1);break;
      case "DEL": 
          return state.set("number",state.get("number")-1);break;                  
      default: return state; 
    }

}


