import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import { Dashboard } from "./Dashboard";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders welcome message", () => {
  const wrapper = shallow(
    <Dashboard
      visible={true}
      profile={{ name: "Sample", role: "Role" }}
      showProfile={() => {}}
    />
  );
  console.log(wrapper.debug());
  const welcome = <div>Welcome to App</div>;
  // expect(wrapper.contains(welcome)).to.equal(true)
  expect.assertions(2);
  expect(wrapper.contains(welcome)).toEqual(true);
  expect(wrapper.find(".App")).toHaveLength(1);
});
