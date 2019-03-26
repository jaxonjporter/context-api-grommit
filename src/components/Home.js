import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Layer, ResponsiveContext, } from 'grommet';
import { FormClose, Edit } from 'grommet-icons';
import User from "./User";
import UserForm from './UserForm';
import {UserConsumer, } from '../providers/UserProvider';




class Home extends Component {
  state = {
    showSidebar: false,
  }

  toggle = () => this.setState({ showSidebar: !this.state.showSidebar })
  render() {
    const { showSidebar } = this.state;
    return (
      <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
                <UserConsumer>
                  { value => (
                  <HomeBar>
                    <Heading level='3' margin='none'>{value.username}</Heading>
                    <Button icon={<Edit />} onClick={() => this.toggle()} />
                  </HomeBar>
                  )}
                </UserConsumer>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }} background='neutral-3'>
                <Box 
                  flex align='center' 
                  justify='center'
                  >
                  <User />
                </Box>
                {(!showSidebar || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      <UserForm toggle={this.toggle} />
                      {/* this is where I would put the component */}
                    </Box>
                  </Collapsible>
                ): (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.toggle()}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      {/* put card component here  */}
                      <UserForm toggle={this.toggle} />
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
    );
  }
}

const HomeBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);


export default Home;