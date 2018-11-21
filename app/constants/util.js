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
