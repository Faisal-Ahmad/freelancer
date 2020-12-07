import React from 'react';
import './App.less';
import {Layout,Typography,Image} from 'antd';
import MyModal from './components/layouts/MyModal';
import NewRegister from './components/layouts/NewRegister';
import { Content, Header } from 'antd/lib/layout/layout';

import Nav from './components/Nav';
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom';

function App() {
  const { Text } = Typography;
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
            <Route path="/login" component={MyModal}/>
            <Route path="/register" component={NewRegister}/>
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
