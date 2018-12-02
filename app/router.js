import React ,{Component} from "react";
import { BrowserRouter, Route,Switch,Link,HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import IndexPage from './containers/index/loadable';
import CatagoryPage from './containers/catogory/loadable';
import ProductParameterPage from "./containers/product-parameter/loadable";
import ProductDetailPage from "./containers/product-detail/loadable";
import NewsPage from "./containers/news/loadable";
import NewsDetailPage from "./containers/news-detail/loadable";

class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <HashRouter>
             
                <Switch>

                             
                    <Route path="/index" component={IndexPage}/>
                    <Route path="/catagory/:id" component={CatagoryPage}/>
                    <Route path="/product-detail/:product_type/:product_id/:product_name" component={ProductDetailPage}/>
                    <Route path="/product-parameter/:product_parent_type/:product_id" component={ProductParameterPage}></Route>
                    <Route path="/news/:brand_id" component={NewsPage}/>
                    <Route path="/newsdetail/:news_id" component={NewsDetailPage}/>
                    <Route component={IndexPage}/>     

                </Switch>
                                  
              </HashRouter>
             </Provider>
            )  
          }   
}



export default App;