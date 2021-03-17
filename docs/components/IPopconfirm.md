---
title: IPopconfirm组件
---

# IPopconfirm 组件

标签常用于列表中状态的标记和分类

Demo:

```tsx
import React from 'react';
import { IPopconfirm } from 'ii-admin-ui';
import { RobotOutlined } from '@ant-design/icons';

export default () => {
  return (
    <div className="test-card-container">
      <IPopconfirm title="Are you sure to delete this task?">
        <a href="#">Delete</a>
      </IPopconfirm>
    </div>
  );
};
```

<!-- <API src='../../src/components/IPopconfirm'> -->

### IPopconfirm prop 说明

根据 UI 规范 对 Popconfirm 进行一些样式调整，参数与 antd [Popconfirm](https://ant.design/components/popconfirm-cn/#API) 完全一致
