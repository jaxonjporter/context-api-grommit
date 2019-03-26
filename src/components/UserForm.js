import React from 'react';
import { Form, Button, FormField, } from 'grommet';
import { UserConsumer, } from '../providers/UserProvider';

class UserForm extends React.Component{

  state = { username: this.props.username, email: this.props.email, firstname: this.props.firstname, lastname: this.props.lastname, };
  
  handleChange = (e) => {
    const { target: { name, value, } } = e
    this.setState({ [name]: value, })
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {...this.state, }
    this.props.updateUser(user);
    this.props.toggle()

  }

  render() {
    const { username, email, firstname, lastname, } = this.state
    return(
        <Form onSubmit={this.handleSubmit}>
          <FormField name="username" value={username} label="User Name" onChange={this.handleChange} />
          <FormField name="email" value={email} type="email" label="Email" onChange={this.handleChange} />
          <FormField name="firstname" value={firstname} label="First Name" onChange={this.handleChange} />
          <FormField name="lastname" value={lastname} label="Last Name" onChange={this.handleChange} />
          <Button type="submit" primary label="Submit" />
        </Form>
    )
  }
}

const ConnectedUserForm = (props) => (
  <UserConsumer>
    { value => (
      <UserForm 
      {...props}
      username={value.username}
      email={value.email}
      firstname={value.firstname}
      lastname={value.lastname}
      updateUser={value.updateUser}
       />
    )}
  </UserConsumer>
)


export default ConnectedUserForm