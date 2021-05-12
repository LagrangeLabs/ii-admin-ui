import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ISmallCard from './index';

describe("Test ISmallCard component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should have the props class', () => {
    const wrapper = mount(
      <ISmallCard
        className="smallcard-item red-bg"
        title="外呼进度"
        titleClass="smallcard-title"
        icon={null}
        tips="这是外呼进度卡片"
        value="40"
        valueClass="smallcard-value"
        unit="%"
        unitClass="smallcard-unit"
      ></ISmallCard>,
    );
    expect(
      wrapper.find('.ii-ui-smallcard.smallcard-item.red-bg').length,
    ).toBeTruthy(); // 判断有没有对应的className
    expect(
      wrapper.find('.ii-ui-smallcard-header-title.smallcard-title').length,
    ).toBeTruthy(); // 判断有没有对应的titleClass
    expect(
      wrapper.find('.ii-ui-smallcard-content-value.smallcard-value').length,
    ).toBeTruthy(); // 判断有没有对应的valueClass
    expect(
      wrapper.find('.ii-ui-smallcard-content-unit.smallcard-unit').length,
    ).toBeTruthy(); // 判断有没有对应的unitClass

    expect(wrapper.text()).toMatch(/外呼进度/); // 判断有没有对应的title
    // expect(wrapper.text()).toMatch(/这是外呼进度卡片/); // 无法判断有没有对应的tips，因为只有在hover到icon的时候才显示
    expect(wrapper.text()).toMatch(/40/); // 判断有没有对应的value
    expect(wrapper.text()).toMatch(/%/); // 判断有没有对应的unit

    wrapper.unmount();
  });
});
