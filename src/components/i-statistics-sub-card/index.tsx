import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import './index.less';

export interface IStatisticsSubCardProps {
  /** 设置卡片的样式名 */
  className?: string;
  /** 卡片名称 */
  title: string;
  /** 卡片名称样式名 */
  titleClass?: string;
  /** 图标icon组件，具体请参考：https://ant.design/components/icon-cn/#header */
  icon?: React.ReactNode;
  /** 图标icon划过的展示信息 */
  tips?: string;
  /** 卡片值 */
  value?: string | number;
  /** 卡片值样式名 */
  valueClass?: string;
  /** 卡片值的单位 */
  unit?: string;
  /** 卡片值的单位样式 */
  unitClass?: string;
}

function IStatisticsSubCard(props: IStatisticsSubCardProps) {
  const {
    className = '',
    title = '',
    titleClass = '',
    icon = (
      <QuestionCircleOutlined className="ii-ui-statisticssubcard-header-icon" />
    ),
    tips,
    value = '--',
    valueClass = '',
    unit = '%',
    unitClass = '',
  } = props;

  return (
    <div className={`ii-ui-statisticssubcard ${className}`}>
      <div className="ii-ui-statisticssubcard-header">
        <h2 className={`ii-ui-statisticssubcard-header-title ${titleClass}`}>
          {title}
        </h2>
        {tips && (
          <Tooltip
            title={() => {
              const tipInfo = tips.split('\n');
              return tipInfo.map((item) => {
                return item.length > 0 ? <div key={item}>{item}</div> : null;
              });
            }}
          >
            {icon}
          </Tooltip>
        )}
      </div>
      <div className="ii-ui-statisticssubcard-content">
        <span className={`ii-ui-statisticssubcard-content-value ${valueClass}`}>
          {value}
        </span>
        <span className={`ii-ui-statisticssubcard-content-unit ${unitClass}`}>
          {unit}
        </span>
      </div>
    </div>
  );
}

export default IStatisticsSubCard;
