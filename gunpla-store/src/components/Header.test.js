import Header from "./Header";
import { mount, shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Header />);
});
