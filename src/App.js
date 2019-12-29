import React, {Component} from 'react';
import Users from './components/users';

class App extends Component {
  render() {
      return (
          <Users users={this.state.users} />
      )
  }

  state = {
      users: []
  };

  componentDidMount() {
      fetch('https://api.github.com/users/iammiguelmx/repos')
          .then(res => res.json())
          .then((data) => {
              this.setState({ users: data })
          })
          .catch(console.log)
  }
}

export default App;