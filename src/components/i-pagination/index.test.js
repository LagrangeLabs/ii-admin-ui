import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import IPagination from './index';

describe("Test IPagination component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should have the props class', () => {
    const wrapper = mount(<IPagination size="small" total={72}></IPagination>);

    // expect(wrapper.find({ size: 'small' }).length).toBeTruthy(); // 判断有没有size

    expect(wrapper.render()).toMatchSnapshot();

    wrapper.unmount();
  });
});
