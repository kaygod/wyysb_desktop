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
