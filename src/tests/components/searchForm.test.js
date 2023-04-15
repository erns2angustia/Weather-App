import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/searchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Leeds",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("button displays the correct text", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.searchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const button = screen.getByRole("button", { name: /search/i });

    expect(button).toBeInTheDocument();
  });
});
