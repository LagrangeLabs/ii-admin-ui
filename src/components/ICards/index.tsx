import React from 'react';
import classNames from 'classnames';

import './index.less';

export type CardProps = {
  /** 设置卡片的样式名 */
  className?: string;
  /** 子元素 */
  children?: React.ReactNode;
  /** card文案 */
  label?: string;
  /** card文案样式名 */
  labelClass?: string;
  /** card值 */
  value?: string | number;
  /** card值样式名 */
  valueClass?: string;
  /** 图标icon组件 */
  icon?: React.ReactNode;
  /** 图标icon样式名 */
  iconClass?: string;
  /** 文案是否在上面，默认值false，文案在上，值在下 */
  reverse?: boolean;
};

function ICards(props: CardProps) {
  const {
    className,
    children,
    label,
    labelClass,
    valueClass,
    value,
    icon,
    iconClass,
    reverse = false,
  } = props;

  const tabCls = classNames('ii-ui-card', className);
  const labelCls = classNames(
    'ii-ui-card-label',
    { 'mt-4': reverse, 'mb-4': !reverse },
    labelClass,
  );
  const valueCls = classNames('ii-ui-card-value', valueClass);
  const iconCls = classNames('ii-ui-card-icon', iconClass);

  return (
    <div className={tabCls}>
      <div className="ii-ui-card-text">
        {!reverse && <div className={labelCls}>{label}</div>}
        <div className={valueCls}>{value}</div>
        {reverse && <div className={labelCls}>{label}</div>}
      </div>
      <div className={iconCls}>{icon}</div>
      {children}
    </div>
  );
}

export default ICards;
