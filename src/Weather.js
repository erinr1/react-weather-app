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
          <div className="col-9 top-left">
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
                  <div className="card cw-card">
                    <div className="card-body">
                      <h5 className="card-title current-city">
                        {weatherData.city}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted date-time">
                        {weatherData.date}
                      </h6>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
