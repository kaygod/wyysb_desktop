import axios from 'axios';


export const post=(url,params)=>{
   
   let post_url="http://m.wayforcloud.com"+url;
   
   let data={data:{}};

   data.data=params;
   
  return new Promise((resolve)=>{

    axios.post(post_url,JSON.stringify(data),{
        headers: {
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
          }
      }).then(res=>{
         
         if(res.data.result==1){
           resolve(res.data.data);
         }else{
             console.log(res);
         }


      },err =>{
        console.log(err)
      })

  })
}


export const brandidmap=(input)=>{
      input=input.toString();
  
      switch (input)
      {
        case "20":return 10;
        case "21":return 259;
        case "19":return 9;
        case "11":return 1;
        case "12":return 2;
        case "13":return 3;
        case "14":return 4;
        case "15":return 5;
        case "16":return 6;
        case "17":return 7;
        case "18":return 8;
        case "22":return 22;
        case "23":return 23;
        case "277":return 260;
        case "298":return 297;
        case "295":return 293;
      }
  
  
    }
  
    export const typeidmap=(input)=>{
        input=input.toString();
     
        switch (input)
        {
          case "20":return 9;
          case "21":return 10;
          case "19":return 8;
          case "11":return 1;
          case "12":return 53;
          case "13":return 2;
          case "14":return 3;
          case "15":return 4;
          case "16":return 5;
          case "17":return 6;
          case "18":return 7;
          case "277":return 11;
          case "298":return 13;
          case "295":return 12;
        }
      
    }