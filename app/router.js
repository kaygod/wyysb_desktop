import React ,{Component} from "react";
import { BrowserRouter, Route,Switch,Link,HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import IndexPage from './containers/index/loadable';
import CatagoryPage from './containers/catogory/loadable';

class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <HashRouter>
             
                <Switch>

                             
                    <Route path="/index" component={IndexPage}/>
                    <Route path="/catagory/:id" component={CatagoryPage}/>
                    <Route component={IndexPage}/>     

                </Switch>
                                  
              </HashRouter>
             </Provider>
            )  
          }   
}



export default App;