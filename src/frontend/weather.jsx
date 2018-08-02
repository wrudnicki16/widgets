import React from 'react';
import '../stylesheets/weather.css';
import APIKey from '../weather_stuff';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      content: 'Loading Weather...'
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
          if (req.status === 200) {
            let json = JSON.parse(req.responseText);
            console.log(json);
            console.log(json['weather']);
            this.setState(() => {
              return (
                {"content": (
                <ul>
                  <li>
                    <span>Weather: {json["weather"][0]["main"]}</span>
                    <span>City: {json["name"]}</span>
                    <span>Coords: {`lat: ${json["coord"]["lat"]} lon: ${json["coord"]["lon"]}`}</span>
                  </li>
                  <li>
                    <span>Temp: {json["main"]["temp"]}</span>
                    <span>Pressure: {json["main"]["pressure"]}</span>
                    <span>Humidity: {json["main"]["humidity"]}</span>
                    <span>Low: {json["main"]["temp_min"]}</span>
                    <span>High: {json["main"]["temp_max"]}</span>
                  </li>
                </ul>
                )}
              );
            });
            
            // document.getElementById("weather-info").innerHTML = innerContent;
            // make this look prettier.
          }
          else if (req.status === 400) {
            alert('There was an error 400');
          }
          else {
            alert(`Something other than 200 went through: ${req.status}`);
          }
        }
      };

      req.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${Math.round(position.coords.latitude)}&lon=${Math.round(position.coords.longitude)}&APPID=${APIKey}&mode=json`, true);
      req.send();
    });
  }

  render() {
    // let content = this.state.loaded ? this.state.content : "Loading Weather...";

    return (
      <div id="weather">
        <h1>Weather</h1>
        <article id="weather-info">{this.state.content}
        </article>
      </div>
    );
  }
}

export default Weather;