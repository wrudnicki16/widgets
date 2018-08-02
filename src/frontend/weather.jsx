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
            let temp = json["main"]["temp"];
            let low = json["main"]["temp_min"];
            let high = json["main"]["temp_max"];

            temp = Math.round(((temp - 273.15) * 1.8) + 32);
            low = Math.round(((low - 273.15) * 1.8) + 32);
            high = Math.round(((high - 273.15) * 1.8) + 32);


            this.setState(() => {
              return (
                {"content": (
                <ul>
                  <li>
                    <span>City: {json["name"]}</span>
                    <span>Weather: {json["weather"][0]["main"]}</span>
                  </li>
                  <li>
                    <span>Temp: {`${temp}˚`}</span>
                    <span>Low: {`${low}˚`}</span>
                    <span>High: {`${high}˚`}</span>
                    <span>Pressure: {`${json["main"]["pressure"]} hPa`}</span>
                    <span>Humidity: {`${json["main"]["humidity"]}%`}</span>
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

      req.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${APIKey}&mode=json`, true);
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