import React from 'react';
import { Icon } from 'antd-mobile';
import './common.css';

const SearchComp = () => {
  const hhh = () => {
    console.log('hhh');
  };
  return (
    <div className="search-static-div" onClick={hhh}>
      <Icon type="search" size="xxs" />
      <span>大家都在搜索“上班包”</span>
    </div>
  );
};

export default SearchComp;
