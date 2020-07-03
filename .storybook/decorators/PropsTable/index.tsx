import React from 'react';
import './index.css';

const Red = (props) => <span style={{ color: 'red' }} {...props} />;

const PropsTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(({ property, propType, required, description, defaultValue }) => {
    return (
      <tr key={property}>
        <td>
          {property}
          {required ? <Red>*</Red> : null}
        </td>
        <td>{propType.name}</td>
        <td>{defaultValue}</td>
        <td style={{ textAlign: 'left' }}>{description}</td>
      </tr>
    );
  });

  return (
    <table style={{ textAlign: 'center', marginTop: '20px' }} className="propsTable">
      <thead>
        <tr>
          <th style={{ width: '250px' }}>属性</th>
          <th style={{ width: '150px' }}>类型</th>
          <th style={{ width: '150px' }}>默认值</th>
          <th style={{ width: '400px', textAlign: 'left' }}>说明</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export default PropsTable;
