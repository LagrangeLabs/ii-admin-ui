import React from 'react';
import { render, fireEvent, wait, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; // toHaveClass、toBeInTheDocument、...
import '@testing-library/jest-dom/extend-expect'; // 注册所有的matchers
import IModal, { IModalProps } from './Modal';

let wrapper: RenderResult, modalElement;

// 测试 Ant Design 的原始 Modal 组件是否正常
describe("Test Modal component on the props of antd's input component", () => {
  /**
   * 针对多个测试case运行前需获取相同的元素，可以通过beforeEach避免重复设置。
   * 在每个case运行之前，都会运行该函数
   */
  beforeEach(() => {
    wrapper = render(<IModal title="模态框" visible={true} />);
  });

  it('should have modal classnames', () => {
    // 在元素加上 data-testid
    modalElement = wrapper.getByText('模态框');
    console.log('modalElement:', modalElement);
    expect(modalElement).toBeInTheDocument();
  });
});
