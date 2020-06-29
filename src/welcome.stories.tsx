import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('首页', module).add(
  'welcome',
  () => {
    return (
      <>
        <h1>欢迎来到 ii-admin-ui 组件库</h1>
        <p>
          ii-admin-ui 组件库， 即中后台 UI 规范组件库，是杭州实在智能前端团队根据设计团队制定的设计规范，开发的 UI
          组件。
        </p>
        <h3>安装试试</h3>
        <code>npm install ii-admin-ui --save</code>
      </>
    );
  },
  // 将 withInfo 插件设置成disable
  { info: { disable: true } }
);
