import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__humidity">"Humidity:{humidity}%"</div>
      <div className="forecast-details__windSpeed">
        Wind Speed: {wind.speed}
      </div>
      <div className="forecast-details__windDirection">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}
export default ForecastDetails;
