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

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| ---- | ---- | ---- | ------ | -------- | ---- |

