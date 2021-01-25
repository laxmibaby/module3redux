import './App.css';
import CreateBill from './components/CreateBill';
import Header from './components/Header';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './Reducer'
import ViewSideBar from './components/ViewSideBar';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import SideBar from './components/SideBar';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import {Button, Col, Container, Row} from "reactstrap"
import ViewBillById from './components/ViewBillById'
import ViewBillByCustId from './components/ViewBillByCustId'
import ViewBillByStatus from './components/ViewBillByStatus'
import ViewBillByDate from './components/ViewBillByDate'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div className="container">
        <Header/>
      
        <Row>
            <Col md={4}>
              <SideBar/>
            </Col>
            <Col md={8}>
              {/* <Route path="/" component={Home} exact/>
              <Route path="/create-bill" component={CreateBill} exact/> */}
              <Route path="/view-bills" component={ViewSideBar} exact/>         
              <Route path="/view-bill-byid" component={ViewBillById} exact/>
              <Route path="/view-bill-bycustid" component={ViewBillByCustId} exact/>
              <Route path="/view-bill-bystatus" component={ViewBillByStatus} exact/>
              <Route path="/view-bill-bydate" component={ViewBillByDate} exact/>
              {/* <Route path="/update-bill" component={UpdateD} exact/> */}
            </Col>
          </Row>
       
      </div>
    </Provider>
    </Router>
    
  );
}

export default App;
