import './App.css';
import React, { Component } from 'react';
import { Menu, Container, Segment } from 'semantic-ui-react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Categories from './Categories';
import Movies from './Movies';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Menu stackable inverted attached="top">
          <Menu.Item>
            <Menu.Header as='h3'>MovieRator</Menu.Header>
          </Menu.Item>

          <Menu.Item as={NavLink} to='/categories'>
            Categories
          </Menu.Item>

          <Menu.Item as={NavLink} to='/top'>
            Top
          </Menu.Item>
        </Menu>
        <Segment attached="bottom">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/categories" />} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/top" component={Movies} />
          </Switch>
        </Segment>
      </Container>
    );
  }
}

export default App;
