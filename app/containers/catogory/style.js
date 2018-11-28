import styled from 'styled-components';

export const CatoryWrapper = styled.div`
    
    
    .n_one {
      display: -webkit-box;
      display: -webkit-flex; 
      display: -ms-flexbox;
      display: flex;
      padding: 2.5% 0;
     }
    .pro_list_one{
    padding: 0 4%;
    dt{
      font-weight: normal;
      color:#0064d3;
      font-size: 15px;
      padding: 2% 0;
      border-bottom: 1px solid #e7e7e7;
    }
    dd{
      padding: 2% 0;
      border-bottom: 1px solid #e7e7e7;
      color:#666;
      display: flex;
      font-size: 15px;
      i{
        color:#999;
        margin-right: 2%;
        margin-top: 3px;
      }
    }
  }
  .pro_list_two{
    padding: 0 4%;
    dt{
      font-weight: normal;
      color:#0064d3;
      font-size: 15px;
      padding: 3.5% 0;
      border-bottom: 1px solid #e7e7e7;
    }
    dd{
      border-bottom: 1px solid #e7e7e7;
      color:#666;
      font-size: 15px;
      .in_one{
        display: flex;
        padding:2.5% 0;
        i{
          color:#999;
          margin-right: 2%;
          margin-top: 3px;
        }
      }
      .in_two{
        background-color: #f4f4f4;
        color:#666;
        font-size: 15px;
        ol{
          width: 100%;
          li{
            border-top: 1px solid #e7e7e7;
            padding:2% 7%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          :last-child{
            border-bottom: none;
          }
        }
  
      }
      .curr{
        div{
          color:#0064d3;
        }
      }
    }
  }
  .tabin{
    display: flex;
    border: 1px solid #0064d3;
    border-radius: 3px;
    margin: 3%;
    color:#0064d3;
    div{
      text-align: center;
      padding: 2% 0;
      width: 50%;
    }
    .curr{
      color:#fff;
      background-color: #0064d3;
    }
  }
  
    
  .right{
          
          margin-left:100px;
          background-color: #fff;

  }  
    
`;

