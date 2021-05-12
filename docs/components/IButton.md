---
title: IButton组件
---

# IButton 组件

主行动按钮：用于主行动点，一个操作区域只能有一个主按钮

Demo:

```tsx
import React from 'react';
import { IButton } from 'ii-admin-ui';
import { PlusOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

import './IButton.css';

export default () => {
  return (
    <>
      <div className="main-row1">
        <IButton type="primary">提交表单</IButton>
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
            <IButton type="primary" sizeValue="1">
              提交表单
            </IButton>
          </div>
          <p>高度：40px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton type="primary" sizeValue="2">
              提交表单
            </IButton>
          </div>
          <p>高度：36px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton type="primary" sizeValue="3">
              提交表单
            </IButton>
          </div>
          <p>高度：32px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton sizeValue="4">提交表单</IButton>
          </div>
          <p>高度：30px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton sizeValue="5">提交表单</IButton>
          </div>
          <p>高度：28px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton sizeValue="6">提交表单</IButton>
          </div>
          <p>高度：26px</p>
        </div>
        <div>
          <div className="main-item">
            <IButton sizeValue="7">提交表单</IButton>
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
import { PlusOutlined } from '@ant-design/icons';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

import './IButton.css';

export default () => {
  return (
    <>
      <div className="minor-row">
        <span className="minor-primary">常规状态</span>
        <div className="minor-item">
          <IButton kind="download">下载</IButton>
          <IButton kind="add" type="dashed">
            添加文件
          </IButton>
          <IButton kind="export">导出</IButton>
          <IButton>增加时间</IButton>
          <IButton kind="edit" type="link">
            编辑
          </IButton>
          <IButton kind="upload" type="link">
            上传
          </IButton>
        </div>
      </div>
      <div className="minor-row">
        <span className="minor-hover">hover状态</span>
        <div className="minor-item minor-item-hover">
          <IButton kind="download">下载</IButton>
          <IButton kind="add" type="dashed">
            添加文件
          </IButton>
          <IButton kind="export">导出</IButton>
          <IButton className="">增加时间</IButton>
          <IButton kind="edit" type="link">
            编辑
          </IButton>
          <IButton kind="upload" type="link">
            上传
          </IButton>
        </div>
      </div>
      <div className="minor-row">
        <span className="minor-disabled">禁用状态</span>
        <div className="minor-item">
          <IButton kind="download" disabled>
            下载
          </IButton>
          <IButton kind="add" type="dashed" disabled>
            添加文件
          </IButton>
          <IButton kind="export" disabled>
            导出
          </IButton>
          <IButton disabled>增加时间</IButton>
          <IButton kind="edit" type="link" disabled>
            编辑
          </IButton>
          <IButton kind="upload" type="link" disabled>
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

| 属性      | 说明         | 类型                                      | 默认值 | 是否必传 | 版本 |
| --------- | ------------ | ----------------------------------------- | ------ | -------- | ---- |
| className | 按钮的类名   | string                                    |        | 否       |      |
| children  | 子元素       | React.ReactNode                           |        | 否       |      |
| kind      | 按钮功能类型 | 'download'/'add'/'export'/'edit'/'upload' |        | 否       |      |
| sizeValue | 按钮大小     | '1'/'2'/'3'/'4'/'5'/'6'/'7'               | '2'    | 否       |      |
