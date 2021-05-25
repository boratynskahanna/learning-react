import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <h2>FAQ</h2>
    <Hero titleText={faqData.title} image={faqData.image} />

    <p>{faqData.text}</p>
  </Container>
);

export default FAQ;