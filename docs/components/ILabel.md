---
title: ILabel组件
---

# ILabel 组件

标签常用于列表中状态的标记和分类

Demo:

```tsx
import React from 'react';
import { ILabel } from 'ii-admin-ui';
import { RobotOutlined } from '@ant-design/icons';

import './ILabel.css';

export default () => {
  return (
    <div className="test-card-container">
      <div>标签类型type: default</div>
      <ILabel
        text="已完成"
        className="test-label"
        style={{ color: 'gray' }}
        status="success"
      ></ILabel>&nbsp;
      <ILabel text="进行中" status="processing"></ILabel>&nbsp;
      <ILabel text="未开始" status="disable"></ILabel>&nbsp;
      <ILabel text="已暂停" status="error"></ILabel>&nbsp;
      <ILabel text="排队中" status="warning"></ILabel>
      <br />
      <br />
      <div>标签类型type: dot</div>
      <ILabel type="dot" text="已完成" status="success"></ILabel>&nbsp;
      <ILabel type="dot" text="进行中" status="processing"></ILabel>&nbsp;
      <ILabel type="dot" text="未开始" status="disable"></ILabel>&nbsp;
      <ILabel type="dot" text="已暂停" status="error"></ILabel>&nbsp;
      <ILabel type="dot" text="排队中" status="warning"></ILabel>
      <br />
      <br />
      <div>标签类型type: ghost</div>
      <ILabel type="ghost" text="已完成" status="success"></ILabel>&nbsp;
      <ILabel type="ghost" text="进行中" status="processing"></ILabel>&nbsp;
      <ILabel type="ghost" text="未开始" status="disable"></ILabel>&nbsp;
      <ILabel type="ghost" text="已暂停" status="error"></ILabel>&nbsp;
      <ILabel type="ghost" text="排队中" status="warning"></ILabel>
      <div />
    </div>
  );
};
```

<!-- <API src='../../src/components/ILabel'> -->

### ILabel prop 说明

| 属性      | 说明             | 类型                                                           | 默认值  | 是否必传 | 版本 |
| --------- | ---------------- | -------------------------------------------------------------- | ------- | -------- | ---- |
| className | 设置标签的样式名 | string                                                         |         | 否       |      |
| style     | 设置标签的样式   | React.CSSProperties                                            |         | 否       |      |
| type      | 标签类型         | 'default' \| 'dot' \| 'ghost'                                  | default | 否       |      |
| status    | 标签状态         | 'success' \| 'processing' \| 'disable' \| 'error' \| 'warning' |         | 否       |      |
| text      | 标签文字         | string                                                         |         | 否       |      |
