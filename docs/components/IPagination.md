---
title: IPagination组件
---

# IPagination 组件

Demo:

```tsx
import React from 'react';
import { IPagination } from 'ii-admin-ui';
import './IPagination.css';

export default () => {
  return (
    <div className="container">
      <IPagination total={72} showSizeChanger={false} />
      <IPagination
        size="small"
        total={72}
        showQuickJumper
        showSizeChanger={false}
      />
      <IPagination size="compact" total={72} showSizeChanger={false} />
      <IPagination size="round" total={72} showSizeChanger={false} />
    </div>
  );
};
```

<!-- <API src='../../src/components/IPagination'> -->

### IPagination prop 说明

| 属性      | 说明       | 类型                                       | 默认值    | 是否必传 | 版本 |
| --------- | ---------- | ------------------------------------------ | --------- | -------- | ---- |
| className | 按钮的类名 | string                                     |           | 否       |      |
| size      | 样式类型   | 'default' \| 'small' \| 'dense' \| 'round' | 'default' | 否       |

IPagination 是 antd pagination 的再封装，继承其属性，其他 API 详见https://ant.design/components/pagination-cn/#API
