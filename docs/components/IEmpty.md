---
title: IEmpty组件
---

# IEmpty 组件

空状态时的展示占位图
当目前没有数据时，用于显式的用户提示

Demo:

```tsx
import React from 'react';
import { IEmpty } from 'ii-admin-ui';
import { RobotOutlined } from '@ant-design/icons';

import './IEmpty.css';

export default () => {
  return (
    <div class="card-container">
      <IEmpty type="data" description={false}></IEmpty>
      <IEmpty type="dataLose"></IEmpty>
      <IEmpty type="file"></IEmpty>
      <IEmpty type="form"></IEmpty>
      <IEmpty type="mail"></IEmpty>
      <IEmpty type="order"></IEmpty>
      <IEmpty type="source"></IEmpty>
    </div>
  );
};
```

<!-- <API src='../../src/components/IEmpty'> -->

### IEmpty prop 说明

继承[EmptyProps](https://ant.design/components/empty-cn/#API)

| 属性        | 说明                                           | 类型                                                                      | 默认值                      | 是否必传 | 版本 |
| ----------- | ---------------------------------------------- | ------------------------------------------------------------------------- | --------------------------- | -------- | ---- |
| type        | 空状态类型                                     | 'data' \| 'dataLose' \| 'file' \| 'form' \| 'mail' \| 'order' \| 'source' |                             | 否       |      |
| description | 自定义描述内容                                 | ReactNode                                                                 |                             | 否       |      |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode                                                                 |                             | 否       |      |
| imageStyle  | 图片样式                                       | CSSProperties                                                             | { width: 220, height: 220 } | 否       |      |

对应关系
| 属性 | 说明 |
| ---| ---|
|data | 数据丢失 |
| dataLose| 数据丢失 |
| file| 暂无文件 |
| form| 暂无表单 |
| mail| 暂无邮件 |
| order| 暂无订单 |
| source| 暂无资料 |
