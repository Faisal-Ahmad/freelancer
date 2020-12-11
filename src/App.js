import React from 'react';
import './App.less';
import {Layout} from 'antd';
import MyModal from './components/layouts/MyModal';
import ForgetPassword from './components/layouts/ForgetPassword';
import DashBoard from './components/layouts/DashBoard';
import { Content, Header } from 'antd/lib/layout/layout';

import Nav from './components/Nav';
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Layout>
          <Header>
            <Nav/>
          </Header>
          <Content>
            <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path={["/login","/register","/details","/type","/freelancer","/complete","/emailok"]} component={MyModal}/>
            <Route path={["/forgetpassword","/passwordsent","/newpassword","/resetcomplete"]} component={ForgetPassword}/>
            <Route path={"/success"} component={DashBoard}/>
            </Switch>
          </Content>
      </Layout>
    </div>
    </Router>
  );
}
const Home = () =>{
  return (
  <div>
    <h1>Home Page</h1>
  </div>
  )
}

export default App;
