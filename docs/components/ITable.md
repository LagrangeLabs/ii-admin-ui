---
title: ITable组件
---

# ITable 组件

Demo:

```tsx
import React from 'react';
import { ITable } from 'ii-admin-ui';

export default () => {
  const data = [];

  for (let i = 0; i < 10; i++) {
    data.push({
      first: `Edward King${i}`,
      second: `32`,
      third: `London, Park Lane no.${i}`,
    });
  }

  const columns = [
    {
      title: 'Name',
      key: 'first',
      dataIndex: 'first',
    },
    {
      title: 'Age',
      key: 'second',
      dataIndex: 'second',
    },
    {
      title: 'Address',
      key: 'third',
      dataIndex: 'third',
    },
  ];

  return <ITable total={10} columns={columns} dataSource={data}></ITable>;
};
```

<!-- <API src='../../src/components/ITable'> -->

### ITable prop 说明

| 属性  | 说明     | 类型   | 默认值 | 版本   |
| ----- | -------- | ------ | ------ | ------ |
| total | 数据总数 | number |        | v1.0.0 |
