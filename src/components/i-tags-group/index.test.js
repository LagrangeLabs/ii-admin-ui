import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ITagsGroup from './index';

describe("Test ITagsGroup component on the self's props", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render defaultValues correctly', () => {
    const wrapper = mount(
      <ITagsGroup
        className="tagsgroup"
        defaultValues={[
          { text: 'disableEditDemo', closable: false },
          'ableEditDemo',
        ]}
      ></ITagsGroup>,
    );

    expect(wrapper.text()).toContain('disableEditDemo'); // 判断有没有对应的文本
    expect(wrapper.find('.ii-tags-group-container').hasClass('tagsgroup')).toBe(
      true,
    );
    expect(wrapper.render()).toMatchSnapshot();

    wrapper.unmount();
  });
});
