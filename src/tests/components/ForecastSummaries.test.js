import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: "Stub description 1",
        icon: "800",
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: "Stub description2",
        icon: "700",
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries forecasts={validProps.forecasts} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of Forecast Summary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps.forecasts} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});