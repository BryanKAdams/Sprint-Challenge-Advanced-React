import React from 'react';
import axios from 'axios'
import UserCard from './UserCard'

export class Axios extends React.Component {
  _isMounted = false;

  state = {
    userData: [],
    followerData: [],
    ghUser: 'BryanKAdams',
  };

  componentDidMount() {
    this._isMounted = true;
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response.data)
        this.setState({ userData: response.data });
      })
  }
  render() {
    return (
      <div data-testid="axios" className="container">
        <UserCard data={this.state.userData} />
      </div>

    );
  }
}