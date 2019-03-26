import React from 'react';
import { Box, Heading } from 'grommet';
import { UserConsumer, } from '../providers/UserProvider';

class User extends React.Component{
  render() {
    return(
    <UserConsumer>
      { value => (
        <Box 
        flexAlign='center' 
        justify='center'
        border={{ color: '#f9f9f9', size: 'xsmall'}}
        style={{boxShadow: '5px 5px 5px #3d138d'}}
        background='light-1'
        >
        <Box margin="large">
        <Heading level='2' margin='0'>{value.username}</Heading>
        <Heading level='4' margin={{vertical: 'xsmall'}}>{value.firstname} {value.lastname}</Heading>
        <Heading level='4' margin='0'>{value.email}</Heading>
        </Box>
      </Box>
    )}
    </UserConsumer>
    )
  }
}

export default User;