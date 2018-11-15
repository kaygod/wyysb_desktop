import styled from 'styled-components';

export const LeftPartWrapper = styled.div`
   
   
   position:fixed;
   width:100px;
   top:0px;
   right:0px;
   bottom:0px;
   left:0px;
   background-color:#262b30;


   .parent{
      height:34px;
      font-size:17px;
      color:#A7A9AB;
      box-sizing:border-box;
      padding-left:14px; 
      line-height:34px;
      cursor:pointer;
      border-bottom:1px solid #333;
      &.current{
         color:#2fb3ff;
         background-color:#1f2429;
      }
   }

   .child{
      background-color:#333; 
   }

   .child li{
          height:26px;
          box-sizing:border-box;
          font-size:12px;
          line-height:26px;
          text-align:center; 
          color:#A7A9AB;
          border-bottom:1px solid #1f2429;
          cursor:pointer; 
      }  
      

`;

