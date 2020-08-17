import React from 'react';
import Wrapper from '../components/wrapper'
import Title from '../components/title';
import Origamis from '../components/origamis';

const Home = () => {
  return (
    <Wrapper>
      <Title title="Origamis" />
      <Origamis />
    </Wrapper>
  )
};

export default Home;
