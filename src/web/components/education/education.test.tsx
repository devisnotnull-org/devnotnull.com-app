import React from "react";
import { render } from "@testing-library/react";

import Education from "./education";

describe("<Folio />", () => {
  it("render Folio Component", () => {
    const wrapper = render(<Education educationList={[]}></Education>);
    expect(wrapper).toMatchSnapshot();
  });
});
