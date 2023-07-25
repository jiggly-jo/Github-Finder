import React, {Component, Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }
  // life cycle method runs when component mounts or when component loads
  // async componentDidMount() {
  //   //this is how you set the state in react
  //   this.setState({loading: true});
  //   const res =  await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users: res.data, loading: false});
    
  // }

  
  //search github users method
  searchUsers = async text => {
    this.setState({loading: true});
    const res =  await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false});
  }

  //get a single github user
  getUser = async (username) => {
    this.setState({loading: true});
    const res =  await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user: res.data, loading: false});
  }

  //clear users from state
  clearUsers = () => this.setState({users: [], loading: false});

  // set Alert
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}});
    //timer to change state at 5000 ms
    setTimeout(() => this.setState({alert: null}), 5000)
  }
  render(){
    const {users, user, loading} = this.state;
    // i have to use a wrapper because of route v6 cant pass in the login or id form the url params
    const UserWrapper = (props) => {
      const params = useParams();
      return <User  {...{...props, match: {params}} } getUser={this.getUser} user={user} loading={loading}/>
    }
    return (
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
  
            <Routes>
              <Route 
                exact 
                path='/' 
                element = {
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear= {users.length > 0 ? true : false}
                    setAlert={this.setAlert}/>
                  <Users loading={loading} users={users}/>
                </Fragment>}/>

              <Route exact path='/about' element={<About />} />
              <Route exact path='/user/:login' Component={UserWrapper} />
            </Routes>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
