import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  // placing firebase stuff here
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCbmT0_PaxuhjkB1qoXuj8iyWExNKD5uMU',
      authDomain: 'manager-b31ba.firebaseapp.com',
      databaseURL: 'https://manager-b31ba.firebaseio.com',
      projectId: 'manager-b31ba',
      storageBucket: '',
      messagingSenderId: '1035308760039'
  };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
