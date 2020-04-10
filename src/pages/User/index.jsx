// ract libraries
import React, { Component } from 'react';

// third party libraries
import { connect } from 'react-redux';

//Components
import Spinner from 'components/Spinner';

// thunk action creators
import { getUserDetails } from 'modules/user';

class App extends Component {
  state = {
    user: []
  }

  async componentDidMount() {
    const { getUserDetails } = this.props;
    try {
      const { userDetails } = await getUserDetails();
      this.setState({
        user: [...userDetails]
      });
    } catch {
      //
    }
  }

  userCard = (props) => {
    return (
      <div key={props.id}>
        <img src={props.avatar} />
        <br/>
        {props.email}
        <br/>
        {props.first_name}
        <br/>
        {props.last_name}
        <br/>
        <br/>
        <br/>
      </div>
    )
  }

  render() {
    const { user: Users } = this.state;
    return Users && Users.length ?
    <div>
      {Users.map(user => this.userCard(user))}
    </div> : <Spinner />
  }
}

export const mapStateToProps = state => ({
  user: state.user,
});

export const mapDispatchToProps = dispatch => ({
  getUserDetails: () => dispatch(getUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
