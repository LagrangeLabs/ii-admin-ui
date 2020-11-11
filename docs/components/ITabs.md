---
title: ITabs组件
---

# IModal 组件

Demo:

```tsx
import React, { useState } from 'react';
import { ITabs } from 'ii-admin-ui';

const { ITabPane } = ITabs;

export default () => {
  return (
    <ITabs>
      <ITabPane tab="Tab1" key="1">
        asd
      </ITabPane>
      <ITabPane tab="Tab2" key="2">
        qwe
      </ITabPane>
      <ITabPane tab="Tab3" key="3">
        zxc
      </ITabPane>
    </ITabs>
  );
};
```
