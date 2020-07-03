import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions'; // 记录组件行为
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

storiesOf('表单', module)
  .addParameters({ info: { propTables: [ITable] } }) // 过滤到 Button 等Props
  // 如果要自动显示组件的注释，需将当前 Story 的名称改成和组件名称一样
  .add('ITable', TestTable);
