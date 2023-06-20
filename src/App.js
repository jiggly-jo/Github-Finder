import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false
  }
  // life cycle method runs when component mounts or when component loads
  async componentDidMount() {
    //this is how you set the state in react
    this.setState({loading: true});
    const res =  await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data, loading: false});
    
  }
  render(){

    return (
      <div>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    );
  }
}

export default App;
