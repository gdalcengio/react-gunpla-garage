import Item from "./Item";

import { mount, shallow } from "enzyme";

const testGunpla = {
  id: 1,
  name: "R03 Buster Gundam",
  line: "HGCE",
  scale: "1/144",
  series: "Gundam Seed",
  originalPrice: 15.0,
  tags: ["HG", "1/144", "Seed", "Gundam"],
  buildDate: "2019-05",
  imgThumb: "temp.png",
  imgs: ["temp.png"],
  custom: false,
};

describe("Single Item display", () => {
  it("renders without crashing", () => {
    shallow(<Item gunpla={testGunpla} />);
  });

  it("should display the proper name", () => {
    const wrapper = shallow(<Item gunpla={testGunpla} />);

    const name = (
      <h3 className="card-name">
        {testGunpla.line} {testGunpla.scale} {testGunpla.name}
      </h3>
    );

    expect(wrapper.contains(name)).toEqual(true);
  });

  it("should have same src image", () => {
    const wrapper = shallow(<Item gunpla={testGunpla} />);

    expect(wrapper.find("img").prop("src")).toContain(testGunpla.imgThumb);
  });

  it("should display all tag list tags", () => {
    const wrapper = shallow(<Item gunpla={testGunpla} />);

    expect(wrapper.find(".tag-list").children()).toHaveLength(4);
    expect(wrapper.find(".tag-list").children()).not.toHaveLength(1);
    expect(wrapper.find(".tag-list").childAt(0).text()).toEqual("HG");
  });

  it("should display proper card date", () => {
    const wrapper = shallow(<Item gunpla={testGunpla} />);

    const date = (
      <p className="card-date">Build date: {testGunpla.buildDate}</p>
    );

    expect(wrapper.contains(date)).toEqual(true);
  });
});
