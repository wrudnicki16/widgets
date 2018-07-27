import React from 'react';
import '../stylesheets/clock.css';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };

    this.interval = null;
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let time = this.state.time;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let secs = time.getSeconds();

    hours < 10 ? hours = `0${hours}` : hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    secs < 10 ? secs = `0${secs}` : secs;

    let day = time.toDateString();
    return (
      <div id="clock">
        <h1>Clock</h1>
        <ul>
          <li id="time">Time: <span>{`${hours}:${minutes}:${secs} PDT`}</span></li>
          <li id="date">Date: <span>{`${day}`}</span></li>
        </ul>
      </div>
    );
  }
}

export default Clock;