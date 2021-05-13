---
title: IButton组件
---

# IButton 组件

主行动按钮：用于主行动点，一个操作区域只能有一个主按钮

Demo:

```tsx
import React from 'react';
import { IButton } from 'ii-admin-ui';
import {
  PlusOutlined,
  VerticalAlignBottomOutlined,
  EditOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import './IButton.css';

export default () => {
  return (
    <>
      <div className="main-row1">
        <IButton type="primary" size="small">
          提交表单
        </IButton>
        <IButton type="primary">
          <PlusOutlined />
          添加时间
        </IButton>
        <IButton type="primary" loading>
          Loading
        </IButton>
        <IButton className="main-hover" type="primary">
          hover状态
        </IButton>
        <IButton type="primary" disabled>
          禁用状态
        </IButton>
      </div>

      <div className="main-row2">
        <div>
          <div className="main-item">
            <IButton type="primary" size="xl">
              提交表单
            </IButton>
          </div>
          <p>高度：40px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton type="primary" size="default">
              提交表单
            </IButton>
          </div>
          <p>高度：36px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton type="primary" size="lg">
              提交表单
            </IButton>
          </div>
          <p>高度：32px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton size="md">提交表单</IButton>
          </div>
          <p>高度：30px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton size="sm">提交表单</IButton>
          </div>
          <p>高度：28px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton size="xs">提交表单</IButton>
          </div>
          <p>高度：26px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton size="xss">提交表单</IButton>
          </div>
          <p>高度：24px</p>
        </div>
      </div>
    </>
  );
};
```

次要按钮：以线框按钮为主，默认按钮：用于没有主次之分的一组行动点。虚线按钮：常用于添加操作。文本按钮：用于最次级的行动点。 链接按钮：用于作为外链的行动点。

Demo:

```tsx
import React from 'react';
import { IButton } from 'ii-admin-ui';
import {
  PlusOutlined,
  VerticalAlignBottomOutlined,
  EditOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import './IButton.css';

export default () => {
  return (
    <>
      <div className="minor-row">
        <span className="minor-primary">常规状态</span>
        <div className="minor-item">
          <IButton>
            <VerticalAlignBottomOutlined />
            下载
          </IButton>
          <IButton type="dashed">
            <PlusOutlined />
            添加文件
          </IButton>
          <IButton>
            <UploadOutlined />
            导出
          </IButton>
          <IButton>增加时间</IButton>
          <IButton type="link">
            <EditOutlined />
            编辑
          </IButton>
          <IButton type="link">
            <UploadOutlined />
            上传
          </IButton>
        </div>
      </div>
      <div className="minor-row">
        <span className="minor-hover">hover状态</span>
        <div className="minor-item minor-item-hover">
          <IButton>
            <VerticalAlignBottomOutlined />
            下载
          </IButton>
          <IButton type="dashed">
            <PlusOutlined />
            添加文件
          </IButton>
          <IButton>
            <UploadOutlined />
            导出
          </IButton>
          <IButton className="">增加时间</IButton>
          <IButton type="link">
            <EditOutlined />
            编辑
          </IButton>
          <IButton type="link">
            <UploadOutlined />
            上传
          </IButton>
        </div>
      </div>
      <div className="minor-row">
        <span className="minor-disabled">禁用状态</span>
        <div className="minor-item">
          <IButton disabled>
            <VerticalAlignBottomOutlined />
            下载
          </IButton>
          <IButton type="dashed" disabled>
            <PlusOutlined />
            添加文件
          </IButton>
          <IButton disabled>
            <UploadOutlined />
            导出
          </IButton>
          <IButton disabled>增加时间</IButton>
          <IButton type="link" disabled>
            <EditOutlined />
            编辑
          </IButton>
          <IButton type="link" disabled>
            <UploadOutlined />
            上传
          </IButton>
        </div>
      </div>
    </>
  );
};
```

<!-- <API src='../../src/components/IButton'> -->

### IButton prop 说明

| 属性      | 说明       | 类型                                                     | 默认值    | 是否必传 | 版本 |
| --------- | ---------- | -------------------------------------------------------- | --------- | -------- | ---- |
| className | 按钮的类名 | string                                                   |           | 否       |      |
| children  | 子元素     | React.ReactNode                                          |           | 否       |      |
| size      | 按钮大小   | 'xl' \| 'default' \| 'lg' \| 'md' \| 'sm'\| 'xs'\| 'xss' | 'default' | 否       |      |
