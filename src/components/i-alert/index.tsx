import React, { FC, ReactNode, useEffect } from 'react';
import { Alert, AlertProps } from 'antd';
import createIIcon from '../i-icon';
import './index.less';

const IIcon = createIIcon('//at.alicdn.com/t/font_2221989_8ljdyf81eqj.js');
// todo 目前只有success的图标
const customIcons = {
  info: '',
  success: <IIcon type="icon-chenggong" />,
  warning: '',
  error: <IIcon type="icon-shibai" />,
} as Record<NonNullable<AlertProps['type']>, ReactNode>;

const IAlert: FC<AlertProps> = props => {
  // props
  const {
    type = 'info',
    showIcon,
    icon,
    closable,
    closeText,
    // ? unstable prefix的变量暂时不支持传入
    action: unstable_action,
    banner: unstable_banner,
    description: unstable_description,
    ...restProps
  } = props;
  // effect
  useEffect(() => {
    let warnTxt = '';
    const createWarnTxt = (txt: string) => {
      if (!warnTxt) {
        warnTxt = txt;
        return;
      }
      warnTxt += '\n' + txt;
    };
    if (unstable_action) {
      createWarnTxt('action暂时不支持');
    }
    if (unstable_banner) {
      createWarnTxt('banner暂不支持');
    }
    if (unstable_description) {
      createWarnTxt('description暂时不支持');
    }
    console.warn(warnTxt);
  }, []);
  // jsx element
  return (
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
};

export default IAlert;

export type IAlertProps = AlertProps;
