//import { info } from 'node-sass';
import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <h2>Info</h2>
    <Hero titleText={infoData.title} image={infoData.image} />
        
    <p>{infoData.text}</p>
  </Container>
);

export default Info;