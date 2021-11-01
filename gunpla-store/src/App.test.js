import { render, screen } from "@testing-library/react";
import { mount, shallow } from "enzyme";

import App from "./App";
// import Header from "./components/Header";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders header", () => {
  const wrapper = mount(<App />);

  const header = (
    <header className="header">
      <h1 className="header-title">Gabe&#39;s Gunpla Garage</h1>
    </header>
  );

  expect(wrapper.contains(header)).toEqual(true);
});
