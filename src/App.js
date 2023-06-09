import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
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
  //clear users from state
  clearUsers = () => this.setState({users: [], loading: false});

  // set Alert
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}});
    //timer to change state at 5000 ms
    setTimeout(() => this.setState({alert: null}), 5000)
  }
  render(){
    const {users, loading} = this.state;
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear= {users.length > 0 ? true : false}
            setAlert={this.setAlert}/>
          <Users loading={loading} users={users}/>
        </div>
        
      </div>
    );
  }
}

export default App;
