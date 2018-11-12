import * as constans from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';

const collectionType=(data)=>({
    type:constans.GET_COLLECTIONS,
    value:fromJS(data.data)
})


export const getCollections=()=>{

   return (dispatch)=>{
    
    axios.get("./data/collection.json").then((data)=>{ 
        dispatch(collectionType(data));  
    }).catch(function (error) {
        console.log(error);
    })

   }

}


const nodeListType=(data)=>({
    type:constans.GET_NOTELIST,
    value:fromJS(data.data)
})

export const getNodeList=()=>{
    return (dispatch)=>{
        
        axios.get("./data/nodelist.json").then((data)=>{ 
            dispatch(nodeListType(data));  
        }).catch(function (error) {
            console.log(error);
        })
    
    }
}

const boardListType=(data)=>({
    type:constans.GET_BOARDLIST,
    value:fromJS(data.data)
})

export const getBoardList=()=>{
    return (dispatch)=>{
        
        axios.get("./data/board.json").then((data)=>{ 
            dispatch(boardListType(data));  
        }).catch(function (error) {
            console.log(error);
        })
    
    }
}

const recommendListType=(data)=>({
    type:constans.GET_RECOMMENDLIST,
    value:fromJS(data.data)
})

export const getRecommendList=()=>{
    return (dispatch)=>{
        
        axios.get("./data/recommend.json").then((data)=>{ 
            dispatch(recommendListType(data));  
        }).catch(function (error) {
            console.log(error);
        })
    
    }
}