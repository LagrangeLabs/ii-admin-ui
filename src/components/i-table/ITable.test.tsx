import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; // toHaveClass、toBeInTheDocument、...
import '@testing-library/jest-dom/extend-expect'; // 注册所有的matchers
import ITable, { IColumnProps } from './index';

interface TestDataItem {
  name: string;
  age: number;
  address: string;
}

const columns: Array<IColumnProps<TestDataItem>> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const testData: Array<TestDataItem & { key: number }> = [];
for (let i = 0; i < 46; i++) {
  testData.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

// 解决报 "matchMedia" 错误
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

let wrapper: RenderResult, tableElement: HTMLElement;

// 测试 Ant Design 的原始 Table 组件是否正常
describe("Test Table component on the props of antd's table component", () => {
  beforeEach(() => {
    wrapper = render(
      <ITable
        columns={columns}
        dataSource={testData}
        total={testData.length}
      />,
    );
    tableElement = wrapper.getByTestId('test-table');
  });

  it('should have table classnames', () => {
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveClass('ant-table');
  });
});
