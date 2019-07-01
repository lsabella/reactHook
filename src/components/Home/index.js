import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import './index.css';
import SearchComp from './Common/search';

const tabs = [
  { title: '关注', sub: '1' },
  { title: '发现', sub: '2' },
  { title: '附近', sub: '3' },
];

const HomePage = () => (
  <div>
    <Tabs
      tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{
        minHeight: '200px', backgroundColor: '#fff',
      }}
      >
        <SearchComp />
        Content of first tab
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', backgroundColor: '#fff',
      }}
      >
        Content of second tab
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', backgroundColor: '#fff',
      }}
      >
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

export default HomePage;
