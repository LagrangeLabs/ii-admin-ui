import React from 'react';
import ITabs from './index';

const { ITabPane } = ITabs;

const TestTabs = () => {
  return (
    <div style={{ width: '800px' }}>
      <ITabs>
        <ITabPane tab="Tab 1" key="1">
          Content of Tab Pane1
        </ITabPane>
        <ITabPane tab="Tab 2" key="2">
          Content of Tab Pane2
        </ITabPane>
        <ITabPane tab="Tab 3" key="3">
          Content of Tab Pane3
        </ITabPane>
        <ITabPane tab="Tab 4" key="4">
          Content of Tab Pane4
        </ITabPane>
      </ITabs>
    </div>
  );
};

export default {
  title: '标签页',
  component: ITabs,
};

export const StoryTabs = () => (
  <div>
    <h1>ITabs 标签页</h1>
    <p>ITabs 组件的 props 与 Ant Design 的 Tabs 组件的 props 保持一致。</p>
    <h2>如何引用</h2>
    <div style={{ marginBottom: '10px' }}>
      <code>{`import { ITabs } from 'ii-admin-ui'`}</code>
      <code>{`const { ITabPane } = ITabs`}</code>
    </div>
    <br />
    <h2>组件展示</h2>
    <TestTabs />
  </div>
);

StoryTabs.story = {
  name: 'ITabs', // 如果要自动显示组件的注释，需将当前 Story 的名称改成和组件名称一样
  parameters: {
    info: {
      propTables: [ITabs],
    },
  },
};
