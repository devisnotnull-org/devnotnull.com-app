import React from "react";
import { render } from "@testing-library/react";

import Skillz from "./skillz";

describe("<Skillz />", () => {
  it("render Skillz Component", () => {
    const wrapper = render(<Skillz abilitiesList={[]}></Skillz>);
    expect(wrapper).toMatchSnapshot();
  });
});
