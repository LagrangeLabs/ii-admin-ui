import React, { FC, ReactNode, useEffect } from 'react';
import { Alert } from 'antd';
import { AlertProps } from 'antd/es/alert';
import createIIcon from '../i-icon';
import './index.less';

const IIcon = createIIcon('//at.alicdn.com/t/font_2221989_8ljdyf81eqj.js');
// todo 目前只有success的图标
const customIcons = {
  info: '',
  success: <IIcon type="icon-chenggong" />,
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
      showIcon={showIcon}
      icon={icon || (showIcon ? customIcons[type] : void 0)}
      closable={closable}
      closeText={
        closeText || (closable ? <IIcon type="icon-guanbi" /> : void 0)
      }
      {...restProps}
    />
  );
  return jsxEle;
};

export default IAlert;
