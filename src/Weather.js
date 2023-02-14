import "./weather.css";
import Footer from "./Footer";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "January 20, 2023 | 4pm",
    temp: "50",
    description: "Cloudy",
    wind: "4",
    feel: "49",
  };
  return (
    <div className="Weather">
      <div className="container app-container">
        <div className="row">
          <div className="col-8 top-left">
            <div className="row">
              <form>
                <input
                  type="text"
                  name="city"
                  placeholder="Search for a city..."
                  autocomplete="off"
                />
                <button className="mag-button">🔍</button>
                <button className="current-location-button">
                  Current Location
                </button>
              </form>

              <div className="current-weather">
                <div className="row">
                  <h4 className="current-city">{weatherData.city}</h4>
                  <h6 className="mb-2 date-time">{weatherData.date}</h6>
                  <div className="row">
                    <div className="col-sm-5 current-temp">
                      <span className="city-temp">{weatherData.temp}</span>
                      <span className="index">
                        <a className="index-links active" href="/">
                          F°
                        </a>
                        |
                        <a className="index-links" href="/">
                          C°
                        </a>
                      </span>
                    </div>

                    <div className="col-sm-7 current-precipt-info">
                      <div className="row">
                        <div className="current-condition">
                          {weatherData.description}
                          <img src="" alt="" />
                          <span></span>
                        </div>
                        <div className="current-wind">
                          <span>{weatherData.wind} 💨 </span>
                          <span></span> km/h
                        </div>
                        <div className="feels-like">
                          Feels like <span>{weatherData.feel}</span>°F
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hourly-forecast">hourly forecast</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3 daily-forecast">
            <div>daily forecast</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
