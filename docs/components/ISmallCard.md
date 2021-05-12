---
title: ISmallCard组件
---

# ISmallCard 组件

统计卡片：主要用于展示当前页面的所属纬度的可视化数据信息

Demo:

```tsx
import React from 'react';
import { ISmallCard } from 'ii-admin-ui';
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import './ISmallCard.css';

export default () => {
  return (
    <div class="smallcard-container">
      <ISmallCard
        className="green-bg"
        title="外呼进度"
        tips="这是外呼进度卡片"
      ></ISmallCard>
      <ISmallCard
        className="smallcard-item red-bg"
        title="外呼进度"
        titleClass="smallcard-title"
        icon={<InfoCircleOutlined className="ii-ui-smallcard-header-icon" />}
        tips="这是外呼进度卡片"
        value="40"
        unit="w"
      ></ISmallCard>
      <ISmallCard
        className="smallcard-item red-bg"
        title="外呼进度"
        titleClass="smallcard-title"
        icon={<InfoCircleOutlined className="smallcard-icon" />}
        tips="这是外呼进度卡片"
        value="40"
        valueClass="smallcard-value"
        unit="w"
        unitClass="smallcard-unit"
      ></ISmallCard>
    </div>
  );
};
```

<!-- <API src='../../src/components/ISmallCard'> -->

### ISmallCard prop 说明

| 属性       | 说明                     | 类型             | 默认值                      | 是否必传 | 版本 |
| ---------- | ------------------------ | ---------------- | --------------------------- | -------- | ---- |
| className  | 设置卡片的样式名         | string           |                             | 否       |      |
| title      | 卡片名称                 | string           |                             | 是       |      |
| titleClass | 卡片名称样式名           | string           |                             | 否       |      |
| icon       | 图标 icon 组件           | React.ReactNode  | `<QuestionCircleOutlined/>` | 否       |      |
| tips       | 图标 icon 划过的展示信息 | string           |                             | 否       |      |
| value      | 卡片值                   | string \| number | --                          | 否       |      |
| valueClass | 卡片值样式名             | string           |                             | 否       |      |
| unit       | 卡片值的单位             | string           | %                           | 否       |      |
| unitClass  | 卡片值的单位样式         | string           |                             | 否       |      |
