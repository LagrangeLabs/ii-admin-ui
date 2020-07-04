import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
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

const TestTable = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: '100%' }}>
        <ITable columns={columns} dataSource={testData} total={testData.length}>
          模态框内容
        </ITable>
      </div>
    </ConfigProvider>
  );
};

export default {
  title: '表格',
  component: ITable,
};

export const StoryTable = () => (
  <div>
    <h1>ITable 组件</h1>
    <p>ITable 组件的 props 与 Ant Design 的 Table 组件的 props 基本保持一致。</p>
    <h2>如何引用</h2>
    <div style={{ marginBottom: '10px' }}>
      <code>{`import {ITable} from 'ii-admin-ui'`}</code>
    </div>
    <br />
    <h2>组件展示</h2>
    <TestTable />
  </div>
);

StoryTable.story = {
  name: 'ITable', // 如果要自动显示组件的注释，需将当前 Story 的名称改成和组件名称一样
  parameters: {
    info: {
      propTables: [ITable],
    },
  },
};
