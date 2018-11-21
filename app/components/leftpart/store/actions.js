import * as constans from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';

const updateFlag=(data)=>({
    type:constans.UPDATE_FLAG,
    value:data
})
  

export const toggle=(data)=>{
   return (dispatch)=>{
    
      dispatch(updateFlag(data));

   }

}


const switchType=(data)=>({
    type:constans.SWITCH_ITEM,
    value:fromJS(data)
})

const updateIndex=(index)=>({
    type:constans.UPDATE_INDEX,
    value:index
})

export const switchTypeAction=(data)=>{
    return (dispatch)=>{
      
        dispatch(switchType(data.data));
        dispatch(updateIndex(data.index));
    }
}
