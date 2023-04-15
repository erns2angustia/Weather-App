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
    endpoint += `city=${searchText}`;
  }
  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Invalid Town or City");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Server Error, Please Try Again Later.");
        console.error("Server Error", error);
      }
    });
};

export default getForecast;
