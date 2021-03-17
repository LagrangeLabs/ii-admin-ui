---
title: ICards组件
---

# ICards 组件

统计卡片：主要用于展示当前页面的所属纬度的可视化数

Demo:

```tsx
import React from 'react';
import { ICards } from 'ii-admin-ui';
import { RobotOutlined } from '@ant-design/icons';

import './ICards.css';

export default () => {
  return (
    <div class="card-container">
      <ICards
        className="card-item gray-bg"
        label="累计用户"
        labelClass="card-label"
        value="4000"
        icon={<RobotOutlined style={{ fontSize: 32 }} />}
        iconClass="card-icon"
        reverse={false}
      ></ICards>
      <ICards
        className="card-item"
        label="累计用户"
        labelClass="card-label"
        valueClass="card-value"
        value="4000"
        icon={<RobotOutlined style={{ fontSize: 32 }} />}
        iconClass="card-icon"
        reverse={false}
      ></ICards>
      <ICards
        reverse
        className="card-item red-color"
        label="累计用户"
        labelClass="card-red-label"
        valueClass="card-red-value"
        value="4000"
        icon={<RobotOutlined style={{ fontSize: 32 }} />}
        iconClass="card-red-icon"
      ></ICards>
    </div>
  );
};
```

<!-- <API src='../../src/components/ICards'> -->

### ICards prop 说明

| 属性       | 说明                                           | 类型             | 默认值 | 是否必传 | 版本 |
| ---------- | ---------------------------------------------- | ---------------- | ------ | -------- | ---- |
| className  | 设置卡片的样式名                               | string           |        | 否       |      |
| children   | 子元素                                         | React.ReactNode  |        | 否       |      |
| label      | card 文案                                      | string           |        | 否       |      |
| labelClass | card 文案样式名                                | string           |        | 否       |      |
| value      | card 值                                        | string \| number |        | 否       |      |
| valueClass | card 值样式名                                  | string           |        | 否       |      |
| icon       | 图标 icon 组件                                 | React.ReactNode  |        | 否       |      |
| iconClass  | 图标 icon 样式名                               | string           |        | 否       |      |
| reverse    | 文案是否在上面，默认值 false，文案在上，值在下 | boolean          | false  | 否       |      |
