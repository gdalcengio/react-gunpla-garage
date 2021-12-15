import Header from "./Header";
import { mount, shallow } from "enzyme";
import { screen } from "@testing-library/dom";

it("renders without crashing", () => {
  shallow(<Header />);
});

it("renders the svg without crashing", () => {
  const wrapper = mount(<Header />);
  const element = screen.queryByTestId("#ShoppingCartIcon");

  expect(wrapper.contains(element));
});
