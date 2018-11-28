import styled from 'styled-components';

export const ProductDetailWrapper = styled.div`
    
    
  .right{
          
          margin-left:100px;
          background-color: #fff;

  } 

  .procompare_list .procompare_item .ma_box div ion-icon{
        display: block;
        width: 100%;
        height: 100%;
        color: #0063D2;
        text-align: right;
        padding-top: 12px;
        padding-right: 24px;
        font-size: 36px;
    }

    .parebackground{
    background-color: #f4f4f4;
  }
  .procompare_list
  {
      background-color: #fff;
      margin: 0;
      padding-top:20px;
      .procompare_title{
        border:none;
        border-bottom: 1px solid #e7e7e7;
        font-size: 18px;
        color:#0064d3;
        width: 92%;
        margin: 0 auto;
        padding-left: 0;
        padding-bottom: 10px;
      }
      .procompare_item
      {
        padding:0 4%;
        border:none;
        margin-top: 1px;
        position: relative;
        background: #fff;
        .ma_box {
          background: #fff;
          border-bottom: 1px solid #e7e7e7;
          padding:10px 0;
            a{
              float: left;
              width: 85%;
              font-size:14px;
              white-space: initial;
              line-height: 14px;
              color:#333;
              .blue_word{
                font-size: 11px;
                color:#3477d7;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
            div{
              width:15%;
              height:100%;
             position: absolute;
             top:0px;
             right:0px;
             font-size: 26px;
               s{
                 display: block;
                 width: 100%;
                 height: 100%;
                 color: #0063D2;
                 text-align: right;
                 padding-top:12px;
                 padding-right:16px;
               }
           }
      }
        .other_box{
          background: #fff;
          border-bottom: 1px solid #e7e7e7;
          padding:10px 0;
          a{
            float: left;
            width: 85%;
            font-size:14px;
            white-space: initial;
            line-height:29px;
            color:#333;
          }
          div{
            width:15%;
            height:100%;
            position: absolute;
            top:0px;
            right:0px;
            font-size: 26px;
            s{
              display: block;
              width: 100%;
              height: 100%;
              color: #0063D2;
              text-align: right;
              padding-top:12px;
              padding-right:16px;
            }
          }
        }
    }
    
  }
  .procompare_footer
  {
     padding: 0px;
    background-color: #fff !important;
     .row{
        padding: 0px;
         .col{
             padding: 0px;
           &:nth-child(1){padding-right: 0.5px;}
           &:nth-child(2){padding-left: 0.5px;}
             button{
                width:100%;
               font-size: 18px;
               border-radius: 0px;
             }
         }
     }
  }
  .procompare_edit
  {
    z-index: 101;
    background: rgba(51,51,51,0.6);
       .editlist{
         width:100%;
         position: absolute;
         bottom: 0px;
         background-color: #fff;
         padding: 5px 15px;
         min-height: 200px;
         box-shadow: 0 0 1px #3a3939;
         .list{
           max-height: 400px;
           overflow: hidden;
              .delcompare{
                border:none;
                border-bottom: 1px solid #e6e6e6;
                margin-top:1px;
                white-space: initial;
                word-break: break-all;
                padding: 6px 0px;
                &:last-child
                {
                  border-bottom: none;
                }
                    a{
                      float: left;
                      font-size: 16px;
                      margin-top: 10px;
                      width: 230px;
                      padding-left: 12px;
                    }
                   div{
                     float: right;
                     width: 60px;
                     s{
                       float: right;
                       width: 100%;
                       height: 34px;
                       font-size: 26px;
                       color: #bebebe;
                       margin-top: 4px;
                       text-align: right;
                       margin-right: 6px;
                     }
                   }
              }
          }
       }
  }
  .totop
  {
    left: initial;
    top: initial;
    right: 5px;
    bottom: 86px;
    z-index: 100;
    width: 30px;
    height: 31px;
    border: 1px solid #D0D0D0 !important;
    position: fixed;
    border-radius: 4px;
    background-color: rgba(255,255,255,.92);
    line-height: 39px;
  
  }
  .totop:before
  {
    font-size: 25px;
    color:#cecece;
  }
  .nodataprolist.nodata
  {
    width:200px;
    color:#666;
    font-size: 15px;
  }
  
  
  .editwarn {
    position: absolute;
    width: 32%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    background-color: #000;
    opacity: 0.7;
    text-align: center;
    border-radius: 4px;
    z-index: 100;
    top: -50px;
    left: 9%;
    display: none;
    s {
      position: absolute;
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #000;
      left: 48%;
      top: 40px;
    }
  }
  .procompare_list .procompare_item:last-child {
     .ma_box{
       border-bottom:none;
     }
    
  }
  .procompare_list{
    
    .procompare_title {
      .item-inner{
        border:none;
      }
    }

    .procompare_item  {
      .item-inner{
        border:none;
      }
    }

    .label {
      margin: 0px;
    }

    .serialsize{
      font-size: $common-fontsize;
    }

  }
.parebackground{
  .fixed-content{
    margin-bottom: 44px;
  }
  .scroll-content{
    margin-bottom: 44px;
  }
}



    
`;

