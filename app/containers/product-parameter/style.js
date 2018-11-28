import styled from 'styled-components';

export const ProductParameterWrapper = styled.div`
    
    
  .right{
          
          margin-left:100px;
          background-color: #fff;
          padding-top:20px;

  }
  
  .iconfont{
    color:#fff;
  }

  p.gt{
    margin-top:7px;
  }

  .fgx{
        width: 100%;
        height: 10px;
        background-color: #f4f4f4;
      }
      .product_detail_subheader{
        padding: 0px;
        background:none;
        border-bottom:none;
          .product_detail_content{
            width:100%;
              .product_detail_header{
                width:100%;
                padding:14px 16px 0px 16px;
                background-color: #fff;
                .product_detail_header_body{
                  padding-bottom: 10px;
                  width:100%;
                  border-bottom:1px solid transparent;
                  background-color: #fff;
                  position: relative;
                  .rightimgs{
                    width: 127px;
                    height: 62px;
                    overflow: hidden;
                    position: relative;
                       div{
                         height: 62px;
                         position: absolute;
                         left:0px;
                       }
                  }
                  &.line{
                    border-bottom:1px solid #e7e7e7;
                  }
                  p{
                    width:150px;
                    font-size: 16px;
                    color:#333;
                  }
                  .gt{
                    img{
                      width:127px;
                      height:62px;
                      float: left;
                    }
                  }
                  .btn {
                    width:30px;
                    height: 36px;
                    position: absolute;
                    right:-20px;
                    top:6px;
                    text-align: center;
                    line-height: 36px;
                    img{
                      width: 55%;
                      height: 63%;
                    }
                  }
                }
              }
          }
      }
      .product_detail_item{
          padding:0px 16px;
          margin-top: 10px;
          &:first-child
          {
            margin-top:0px;
          }
             .product_detail_item_title{
                 height:30px;
                 background-color: #999;
                 padding:0px 5px;
                 div{
                   font-size:14px;
                   color:#fff;
                   line-height: 30px;
                   height:100%;
                 }
                 p{
                    s{
                      width: 18px;
                       float:right;
                       margin-top: 3px;
                      font-size: 23px;
                      color:#fff;
                    }
                 }
             }
            /*数据体部分*/
            .product_detail_item_body{
                 .box{
                      padding:8px 5px;
                      font-size:14px;
                      border-bottom: 1px solid #e7e7e7;
                     &:last-child
                     {
                       border-bottom: none;
                     }
                     p{
                       width: 114px;
                       color: #9a9a9a;
                       word-break: break-all;
                     }
                     div{
                       width:162px;
                       text-align: right;
                       color: #5c5c5c;
                       word-break: break-all;
                     }
                 }
            }
      }
      .addnowconparison {
        width: 23px;
        height: 64px;
        padding-top: 5px;
        padding-bottom: 4px;
        background: rgba(0, 99, 210, 0.8);
        position: fixed;
        right: 10px;
        bottom: 86px;
        z-index: 10;
        font-size: 12px;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        line-height: 14px;
      }
      .socialshare::before{
        font-size: 26px !important;
      }
      .socialshare {
        width: 26px;
        height: auto;
        margin-top: -10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      
      .shareapp{
        z-index: 100;
        background: rgba(51, 51, 51, 0.6);
           .shareappcontent{
                width:100%;
                position: absolute;
                bottom: 0px;
                background-color: #fff;
                padding-bottom: 15px;
                 .sharetitle,.sharecansel{
                     height:50px;
                     background-color: #f4f4f4;
                     line-height: 50px;
                     color:#696969;
                     font-size: 16px;
                     padding-left: 15px;
                 }
                 .sharetitle {
                   border-bottom: 1px solid #eaeaea;
                 }
                 .sharecansel{
                   padding-left: 0px;
                   text-align: center;
                   height: 40px;
                   line-height: 40px;
                   width: 89%;
                   margin: 0 auto;
                   border-radius: 3px;
                   border: 1px solid #eaeaea;
                 }
                 .sharecatory{
                     background-color: #fff;
                     padding:15px 5px ;
                     display: flex;
                       a{
                            flex:1;
                            text-align: center;
                            img{
                                width:50%;
                            }
                            p{
                              font-size: 13px;
                               color:#333;
                              margin-top: 5px;
                            }
                       }
                 }
           }
      }
      .toshowmore {
        position: fixed;
        background-color: #373b3d;
        height: 60px;
        width: 100%;
        top: 44px;
        z-index: 110;
        display: flex;
        a {
          width: 33.3%;
          height: 96%;
          color: #fff;
          text-align: center;
          padding: 2% 0;
          i{
            height: 32px;
            display: block;
            font-size: 25px;
          }
          i:before{
            color:#fff;
          }
          p {
            color: #d2d3d3;
            font-size: 12px;
            margin-top: -6px;
          }
        }
      }
      .swipeimg{
        position: fixed;
        top:0px;
        left:0px;
        right: 0px;
        bottom: 0px;
        background-color: #333;
        z-index: 1000;
        .bigimgback{
          position: absolute;
          left:0px;
          top:0px;
          color:#686969;
          z-index: 1;
          width: 60px;
          height: 60px;
          &::before
          {
            font-size: 40px;
            position: absolute;
            left: 15px;
            top: 15px;
          }
        }
        .countflag{
          position: absolute;
          left: 15px;
          bottom: 15px;
          z-index: 1;
          color: #fff;
          font-size: 16px;
        }
        .sliderbig{
          width:100%;
          height:100%;
          position: absolute;
          left:0px;
          top:0px;
          background-color: #000;
          .slideimg{
            width: 100%;
            height: 100%;
            overflow:hidden;
            position: relative;
            float: left;
            display: flex;
            align-items: center;
            img{
              width:100%;
            }
          }
        }
      }
      .hid{
        opacity: 0;
      }
      .product_detail_item .product_detail_item_title p .icon{
        width: 18px;
        height: 23px;
        float: right;
        margin-top: 3px;
        font-size: 23px;
        color: #fff;
    }
    .product_detail_subheader>div:nth-child(1){
      border-bottom:none;
    }    
  
    .product_detail_subheader .product_detail_content .product_detail_header .product_detail_header_body.scroll{
      border-bottom: 1px solid #e7e7e7;
    }

    
`;

