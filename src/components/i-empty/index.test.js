import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import IEmpty from './index';

describe("Test IEmpty component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render type correctly', () => {
    const wrapper = mount(<IEmpty type="data"></IEmpty>);

    expect(wrapper.text()).toBe('数据丢失'); // 判断有没有对应的文本

    expect(wrapper.render()).toMatchSnapshot();

    wrapper.unmount();
  });

  it('should render description correctly', () => {
    const wrapper = mount(<IEmpty type="data" description="测试数据"></IEmpty>);
    const wrapperNo = mount(<IEmpty type="data" description={false}></IEmpty>);

    expect(wrapper.text()).toBe('测试数据'); // 判断有没有对应的文本
    expect(wrapperNo.text()).toBe(''); // 判断有没有对应的文本

    wrapper.unmount();
  });
});
