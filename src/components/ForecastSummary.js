import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, icon, temperature, description } = props;
  const weatherCode = `${icon.slice(0, 1)} + 00`;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt="weather-icon" />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

export default ForecastSummary;
