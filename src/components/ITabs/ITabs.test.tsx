import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; // toHaveClass、toBeInTheDocument、...
import '@testing-library/jest-dom/extend-expect'; // 注册所有的matchers
import ITab, { ITabsProps } from './index';

const { ITabPane } = ITab;

let wrapper: RenderResult, tabElement;

// 测试 Ant Design 的原始 Tabs 组件是否正常
describe("Test Tabs component on the props of antd's input component", () => {
  /**
   * 针对多个测试case运行前需获取相同的元素，可以通过beforeEach避免重复设置。
   * 在每个case运行之前，都会运行该函数
   */
  beforeEach(() => {
    wrapper = render(
      <ITab>
        <ITabPane tab="test" key="test">
          hello
        </ITabPane>
      </ITab>
    );
  });

  it('should have tabs classnames', () => {
    // 在元素加上 data-testid
    tabElement = wrapper.getByText('hello');
    console.log('modalElement:', tabElement);
    expect(tabElement).toBeInTheDocument();
  });
});
