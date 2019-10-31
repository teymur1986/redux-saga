import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/users'; 
import UserList from './UsersList';
import UserForm from './UserForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }

  handleUserSubmit = ({firstName, lastName}) => {
    this.props.createUsersRequest({firstName, lastName});
  }

  handleDeleteUser = (userId) => {
    this.props.deleteUsersRequest(userId);
  }

  render() {
    const users = this.props.users;
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <UserForm onSubmit={this.handleUserSubmit}/>
        <UserList users={users.items} onDeleteUser={this.handleDeleteUser}/>
      </div>
    )
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest: actions.getUsersRequest,
  createUsersRequest: actions.createUsersRequest,
  deleteUsersRequest: actions.deleteUsersRequest,
})(App);
