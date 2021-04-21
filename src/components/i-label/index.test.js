import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ILabel from './index';

describe("Test ILabel component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should have the props class', () => {
    const wrapper = mount(
      <ILabel type="dot" text="排队中" status="warning"></ILabel>,
    );

    expect(
      wrapper.find('.ii-ui-label-dot.ii-ui-label-dot-warning').length,
    ).toBeTruthy(); // 判断有没有对应的class

    expect(wrapper.text()).toBe('排队中'); // 判断有没有对应的文本

    expect(wrapper.render()).toMatchSnapshot();

    wrapper.unmount();
  });
});
