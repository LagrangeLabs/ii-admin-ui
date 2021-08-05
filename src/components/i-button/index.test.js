import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IButton from './index';

Enzyme.configure({ adapter: new Adapter() });

describe("Test button component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should have the props class', () => {
    const wrapper = mount(<IButton size="lg">添加按钮</IButton>);

    expect(wrapper.find('.ii-button').length).toBeTruthy(); // 判断有没有对应的class

    expect(wrapper.find({ size: 'lg' }).length).toBeTruthy(); // 判断有没有size

    expect(wrapper.render()).toMatchSnapshot();
    wrapper.unmount();
  });
});
