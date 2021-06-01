---
title: IStatisticsSubCard组件
---

# IStatisticsSubCard 组件

统计卡片：主要用于展示当前页面的所属纬度的可视化数据信息

Demo:

```tsx
import React from 'react';
import { IStatisticsSubCard } from 'ii-admin-ui';
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import './IStatisticsSubCard.css';

export default () => {
  return (
    <div className="statisticssubcard-container">
      <IStatisticsSubCard
        className="green-bg"
        title="外呼进度"
        tips="这是外呼进度卡片"
      ></IStatisticsSubCard>
      <IStatisticsSubCard
        className="statisticssubcard-item red-bg"
        title="外呼总数"
        titleClass="statisticssubcard-title"
        icon={
          <InfoCircleOutlined className="ii-ui-statisticssubcard-header-icon" />
        }
        tips="这是外呼总数卡片"
        value={0}
        unit="w"
      ></IStatisticsSubCard>
      <IStatisticsSubCard
        className="statisticssubcard-item red-bg"
        title="外呼总数"
        titleClass="statisticssubcard-title"
        icon={<InfoCircleOutlined className="statisticssubcard-icon" />}
        tips="这是外呼总数卡片"
        value="40"
        valueClass="statisticssubcard-value"
        unit="w"
        unitClass="statisticssubcard-unit"
      ></IStatisticsSubCard>
    </div>
  );
};
```

<!-- <API src='../../src/components/IStatisticsSubCard'> -->

### IStatisticsSubCard prop 说明

| 属性       | 说明                               | 类型             | 默认值                      | 是否必传 | 版本 |
| ---------- | ---------------------------------- | ---------------- | --------------------------- | -------- | ---- |
| className  | 设置卡片的样式名                   | string           |                             | 否       |      |
| title      | 卡片名称                           | string           |                             | 是       |      |
| titleClass | 卡片名称样式名                     | string           |                             | 否       |      |
| icon       | 图标 icon 组件                     | React.ReactNode  | `<QuestionCircleOutlined/>` | 否       |      |
| tips       | 图标 icon 划过的展示信息，换行加\n | string           |                             | 否       |      |
| value      | 卡片值                             | string \| number | --                          | 否       |      |
| valueClass | 卡片值样式名                       | string           |                             | 否       |      |
| unit       | 卡片值的单位                       | string           | %                           | 否       |      |
| unitClass  | 卡片值的单位样式                   | string           |                             | 否       |      |
