import React, { FC, ReactNode, useEffect } from 'react';
import { Alert } from 'antd';
import { AlertProps } from 'antd/es/alert';
import './index.less';

// todo
const customIcons = {
  info: '',
  success: '',
  warning: '',
  error: '',
} as Record<NonNullable<AlertProps['type']>, ReactNode>;

const IAlert: FC<AlertProps> = props => {
  // props
  const {
    type = 'info',
    showIcon,
    icon,
    closable,
    closeText,
    action: unstable_action,
    banner: unstable_banner,
    description: unstable_description,
    ...restProps
  } = props;
  // effect
  useEffect(() => {
    let warnTxt = '';
    if (unstable_action) {
      warnTxt += 'action暂时不支持';
    }
    if (unstable_banner) {
      warnTxt += '\nbanner暂不支持';
    }
    if (unstable_description) {
      warnTxt += '\ndescription暂时不支持';
    }
    console.warn(warnTxt);
  }, []);
  // jsx element
  const jsxEle = (
    <Alert
      className={`ii-alert ii-alert--${type}`}
      type={type}
      // todo
      icon={icon || (showIcon ? customIcons[type] : void 0)}
      // todo
      closeText={closeText || (closable ? '' : void 0)}
      {...restProps}
    />
  );
  return jsxEle;
};

export default IAlert;
