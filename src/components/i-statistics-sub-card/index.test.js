import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import IStatisticsSubCard from './index';

describe("Test IStatisticsSubCard component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should have the props class', () => {
    const wrapper = mount(
      <IStatisticsSubCard
        className="statisticssubcard-item red-bg"
        title="外呼进度"
        titleClass="statisticssubcard-title"
        icon={null}
        tips="这是外呼进度卡片"
        value={0}
        valueClass="statisticssubcard-value"
        unit="%"
        unitClass="statisticssubcard-unit"
      ></IStatisticsSubCard>,
    );
    expect(
      wrapper.find('.ii-ui-statisticssubcard.statisticssubcard-item.red-bg')
        .length,
    ).toBeTruthy(); // 判断有没有对应的className
    expect(
      wrapper.find(
        '.ii-ui-statisticssubcard-header-title.statisticssubcard-title',
      ).length,
    ).toBeTruthy(); // 判断有没有对应的titleClass
    expect(
      wrapper.find(
        '.ii-ui-statisticssubcard-content-value.statisticssubcard-value',
      ).length,
    ).toBeTruthy(); // 判断有没有对应的valueClass
    expect(
      wrapper.find(
        '.ii-ui-statisticssubcard-content-unit.statisticssubcard-unit',
      ).length,
    ).toBeTruthy(); // 判断有没有对应的unitClass

    expect(wrapper.text()).toMatch(/外呼进度/); // 判断有没有对应的title
    // expect(wrapper.text()).toMatch(/这是外呼进度卡片/); // 无法判断有没有对应的tips，因为只有在hover到icon的时候才显示
    expect(wrapper.text()).toMatch(/0/); // 判断有没有对应的value
    expect(wrapper.text()).toMatch(/%/); // 判断有没有对应的unit

    expect(wrapper.render()).toMatchSnapshot();
    wrapper.unmount();
  });
});
