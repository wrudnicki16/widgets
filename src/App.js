import React, { Component } from 'react';
import './App.css';
import Clock from './frontend/clock';
import Tab from './frontend/tab';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Weather />
        <div>
          <Tab data={[
            { "title": "one", "content": "I am the worst :(" },
            { "title": "two", "content": "I am the best!"},
            { "title": "third", "content": "I've got a hairy chest" }
          ]}/>
          
        </div>
        <AutoComplete data={[
          "Joe", "Jeff", "John", "Jocelyn", "Justin", "Jessica", "Justine"
        ]} />
      </div>
    );
  }
}

export default App;
