// app.test.js
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "./app";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  // Wrap our app with BrowserRouter, using MemoryRouter to control history
  render(<App />, { wrapper: BrowserRouter });

  // verify page content for default route
  expect(screen.getByText(/about me/i)).toBeInTheDocument();

  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    );

    // verify navigation to "no match" route
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
