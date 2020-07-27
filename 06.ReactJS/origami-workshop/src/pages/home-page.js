import React, { Component } from 'react';
import Wrapper from '../components/wrapper'
import Title from '../components/title';
import Origamis from '../components/origamis';
import UserContext from '../Context';

class Home extends Component {
  static contextType = UserContext;

  render() {
    console.log(this.context)
    return (
      <Wrapper>
        <Title title="Origamis" />
        <Origamis />
      </Wrapper>
    );
  }
};

export default Home;
