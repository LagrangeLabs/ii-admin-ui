---
title: ITagsGroup组件
---

# ITagsGroup 组件

具有交互行为标签组

Demo:

```tsx
import React from 'react';
import { ITagsGroup } from 'ii-admin-ui';

export default () => {
  const onValuesChange = values => {
    console.log(values, '########');
  };

  return (
    <div className="card-container">
      <ITagsGroup
        defaultValues={[
          { text: 'hhh', closable: false },
          '22222',
          { text: '3333' },
        ]}
        onValuesChange={onValuesChange}
      ></ITagsGroup>
    </div>
  );
};
```

<!-- <API src='../../src/components/ITagsGroup'> -->

### ITagsGroup prop 说明

继承[TagsProps](https://ant.design/components/tag-cn/#API)

| 属性           | 说明                       | 类型                     | 默认值     | 是否必传 | 版本 |
| -------------- | -------------------------- | ------------------------ | ---------- | -------- | ---- |
| defaultValues  | 标签组默认值               | DefaultTags[]            |            | 否       |      |
| addText        | 添加标签文字，             | string                   | 增加关键词 | 否       |      |
| maxLength      | 标签长度，超出显示 tooltip | number                   | 20         | 否       |      |
| onValuesChange | 标签组值更新回调           | (tags: string[]) => void |            | 否       |      |

#### DefaultTags

string | 对象{ closable?: boolean; text?: string }
| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| ---- | ---- | ---- | ------ | -------- | ---- |
| closable| 是否可以关闭 | boolean | true | 否 | |
| text | 标签文案 | string | | 否 | |
