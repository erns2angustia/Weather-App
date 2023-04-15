import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts &&
        forecasts.map((forecast) => (
          <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            description={forecast.description}
            icon={forecast.icon.toString()}
            temperature={forecast.temperature}
          />
        ))}
    </div>
  );
}

export default ForecastSummaries;
