import React, { useState } from 'react';
import { Button } from 'antd';
import IModal from './IModal';

const TestModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ width: '400px' }}>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        打开对话框
      </Button>

      <IModal
        title="模态框"
        cancelText="取消"
        okText="立即添加"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        模态框内容
      </IModal>
    </div>
  );
};

export default {
  title: '对话框',
  component: IModal,
};

export const StoryModal = () => (
  <div>
    <h1>IModal 对话框</h1>
    <p>IModal 组件的 props 与 Ant Design 的 Modal 组件的 props 基本保持一致。</p>
    <h2>如何引用</h2>
    <div style={{ marginBottom: '10px' }}>
      <code>{`import { IModal } from 'ii-admin-ui'`}</code>
    </div>
    <br />
    <h2>组件展示</h2>
    <TestModal />
  </div>
);

StoryModal.story = {
  name: 'IModal', // 如果要自动显示组件的注释，需将当前 Story 的名称改成和组件名称一样
  parameters: {
    info: {
      propTables: [IModal],
    },
  },
};
