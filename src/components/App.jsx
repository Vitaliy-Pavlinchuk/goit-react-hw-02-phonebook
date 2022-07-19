import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContaktForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <>
        <h1>Phone Book</h1>
        <ContaktForm />
        <div>React homework template!</div>
      </>
    );
  }
}
