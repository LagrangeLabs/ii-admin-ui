import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IAlert from './index';

Enzyme.configure({ adapter: new Adapter() });

describe("Test IAlert component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should have the props class', () => {
    const wrapper = mount(
      <IAlert message="default text" style={{ marginBottom: 20 }} />,
    );

    expect(wrapper.find('ii-alert').length).toBeTruthy(); // 判断有没有对应的class

    expect(wrapper.text()).toBe('default text'); // 判断有没有对应的文本

    expect(wrapper.render()).toMatchSnapshot();

    wrapper.unmount();
  });
});
