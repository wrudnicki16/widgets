import React, { Component } from 'react';
import './App.css';
import Clock from './frontend/clock';
import Tab from './frontend/tab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Tab data={[
          { "title": "one", "content": "I am the worst :(" },
          { "title": "two", "content": "I am the best!"},
          { "title": "third", "content": "I've got a hairy chest" }
        ]}/>
      </div>
    );
  }
}

export default App;
