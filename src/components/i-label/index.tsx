import React from 'react';
import classNames from 'classnames';

import './index.less';

export type LabelProps = {
  /** 设置标签的样式名 */
  className?: string;
  /** 设置标签的样式 */
  style?: React.CSSProperties;
  /** 标签类型 */
  type?: 'default' | 'dot' | 'ghost';
  /** 标签状态 */
  status?: 'success' | 'processing' | 'disable' | 'error' | 'warning';
  /** 标签文字 */
  text?: string;
};

const prefixCls = 'ii-ui-label';

function ILabel(props: LabelProps) {
  const { className, style, type = 'default', status, text } = props;

  const labelCls = classNames(
    'ii-ui-label',
    {
      [`${prefixCls}-${type}`]: !!status,
      [`${prefixCls}-${type}-${status}`]: !!status,
    },
    className,
  );

  return (
    <div className={labelCls} style={style}>
      {text}
    </div>
  );
}

export default ILabel;
