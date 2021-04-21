import React from 'react';
import classNames from 'classnames';
import { Tabs } from 'antd';
import { TabsProps, TabPaneProps } from 'antd/lib/tabs';

const { TabPane } = Tabs;

export type ITabsProps = TabsProps;
export type ITabPaneProps = TabPaneProps;

function ITabs(props: ITabsProps) {
  const { className, children, ...restProps } = props;

  const tabCls = classNames('ii-tabs', className);

  return (
    <Tabs data-testid="test-tabs" className={tabCls} {...restProps}>
      {children}
    </Tabs>
  );
}

ITabs.ITabPane = TabPane;

export default ITabs;
