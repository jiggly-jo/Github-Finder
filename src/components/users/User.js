import React, { Component, useEffect } from 'react'

export class User extends Component {
    componentDidMount() {
        //login is what i set the param name as when i called the component in router.
        // this.props.getUser(this.props.match.params.login);
        let {login} = this.props.match.params.login;
            this.props.getUser(login);
    }
  render() {

    const {
        name,
        avatar_url,
        location, 
        bio,
        blog,
        login,
        html_url,
        followers,
        following, 
        public_repos,
        public_gists,
        hireable
    } = this.props.user;

    const { loading } = this.props;
    return (
      <div>{name}</div>
    )
  }
}

export default User