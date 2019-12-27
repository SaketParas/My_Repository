import React from 'react';
import './App.css';
import Login from './component/login';
import Navbar from './component/navbar';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Home from './component/home'; 
import Show from './component/show';
import Create from './component/create';
import Edit from './component/edit';
import Delete from './component/delete';
import Logout from './component/logout';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userToken:''

    }
  }
  gotToken = (receivetoken) => {
    //console.log(receivetoken)
    this.setState({userToken: receivetoken})
}
  render(){
    console.log(this.state.userToken)
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/login" render={props => <Login giveToken={(tokenData) => {this.gotToken(tokenData)}} {...props}/>}/> 
          <Route path="/home" render={props => <Home passingData ={this.state.userToken}/>}/>
          <Route path="/show/:id" component={Show}/>
          <Route path="/create" component={Create}/>
          <Route path="/edit/:id" component={Edit}/>
          <Route path="/delete/:id" component={Delete}/>
          <Route path="/logout" component={Logout}/>
        </BrowserRouter>
      </React.Fragment>
);
  }
}

export default App;
