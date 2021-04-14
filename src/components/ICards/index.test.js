import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ICards from './index';

describe("Test ICards component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should have the props class', () => {
    const wrapper = mount(
      <ICards
        className="card-item gray-bg"
        label="累计用户"
        labelClass="card-label"
        value="4000"
        icon={null}
        iconClass="card-icon"
        reverse={false}
      ></ICards>,
    );
    expect(wrapper.find('.ii-ui-card.card-item.gray-bg').length).toBeTruthy(); // 判断有没有对应的class
    expect(wrapper.find('.ii-ui-card-label.card-label').length).toBeTruthy(); // 判断有没有对应的class
    expect(wrapper.find('.ii-ui-card-value').length).toBeTruthy(); // 判断有没有对应的class
    expect(wrapper.find('.ii-ui-card-icon.card-icon').length).toBeTruthy(); // 判断有没有对应的class

    expect(wrapper.text()).toMatch(/累计用户/); // 判断有没有对应的文本
    expect(wrapper.text()).toMatch(/4000/); // 判断有没有对应的文本

    wrapper.unmount();
  });
});
