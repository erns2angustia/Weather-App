import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  return axios
    .get(endpoint)
    .then((response) => {
      setErrorMessage("");
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      setForecasts([]);
      if (error.response === undefined) {
        console.log(error);
        return;
      }
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Ivalid town or city, please try again!");
      }
      if ( status === 500) {
        setErrorMessage("Oops! Server Error, please try again later!");
      }
    });
};

export default getForecast;
