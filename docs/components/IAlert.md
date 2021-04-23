---
title: IAlert组件
---

# IAlert 组件

Demo:

```tsx
import React, { useState } from 'react';
import { IAlert } from 'ii-admin-ui';

export default () => {
  return (
    <>
      <IAlert message="default text" style={{ marginBottom: 20 }} />
      <IAlert
        message="success text"
        type="success"
        style={{ marginBottom: 20 }}
      />
      <IAlert message="info text" type="info" style={{ marginBottom: 20 }} />
      <IAlert
        message="warning text"
        type="warning"
        style={{ marginBottom: 20 }}
      />
      <IAlert message="error text" type="error" style={{ marginBottom: 20 }} />
      <IAlert
        message="success text"
        type="success"
        showIcon={true}
        closable={true}
        style={{ marginBottom: 20 }}
      />
    </>
  );
};
```

### IAlert prop 说明

| 属性  | 说明 | 类型   | 默认值 | 版本   |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string |        | v1.0.0 |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
