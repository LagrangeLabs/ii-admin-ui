---
title: IModal组件
---

# IModal 组件

Demo:

```tsx
import React, { useState } from 'react';
import { IModal } from 'ii-admin-ui';
import { Button } from 'antd';

const [visible, setVisible] = useState(false);

export default () => {
  const handleClickBtn = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={handleClickBtn}>查看</Button>
      <IModal
        visible={visible}
        title="IModal"
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </>
  );
};
```

<!-- <API src='../../src/components/IModal'> -->

### IModal prop 说明

| 属性  | 说明 | 类型   | 默认值 | 版本   |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string |        | v1.0.0 |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
