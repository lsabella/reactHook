import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import './index.css';
import ListViewExample from '../Home/index';

function TabBarExample() {
  const [selectedTab, setSelectedTab] = useState('blueTab');
  const [hidden, setHidden] = useState(false);

  function renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>
        Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <div
          style={{
            display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9',
          }}
          onClick={(e) => {
            e.preventDefault();
            setHidden(!hidden);
          }}
        >
          Click to show/hide tab-bar
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed', height: '100%', width: '100%', top: 0,
    }}
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        hidden={hidden}
        prerenderingSiblingsNumber={0}
        style={{}}
      >
        <TabBar.Item
          title="首页"
          key="Home"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
          }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
          }}
          />
          }
          selected={selectedTab === 'blueTab'}
          badge={3}
          onPress={() => {
            setSelectedTab('blueTab');
          }}
          data-seed="logId"
        >
          <ListViewExample />
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
            }}
            />
          }
          title="商城"
          key="Mall"
          badge="new"
          selected={selectedTab === 'redTab'}
          onPress={() => {
            setSelectedTab('redTab');
          }}
          data-seed="logId1"
        >
          {renderContent('Koubei')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '48px',
              height: '36px',
              background: 'url(https://img.maihaoche.com/tms/contracts/o_1debnd8nf1vq17311rnerdsr9u67_plus-box.png) center center /  48px 36px no-repeat',
            }}
            />
          }
          className="header-wrapper"
          selectedIcon={
            <div style={{
              width: '48px',
              height: '36px',
              background: 'url(https://img.maihaoche.com/tms/contracts/o_1debnd8nf1vq17311rnerdsr9u67_plus-box.png) center center /  48px 36px no-repeat',
            }}
            />
          }
          key="my"
          selected={selectedTab === 'yellowTab'}
          onPress={() => {
            setSelectedTab('yellowTab');
          }}
        >
          {renderContent('My')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
            }}
            />
          }
          title="消息"
          key="Msg"
          dot
          selected={selectedTab === 'greenTab'}
          onPress={() => {
            setSelectedTab('greenTab');
          }}
        >
          {renderContent('Friend')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我"
          key="my"
          selected={selectedTab === 'yellowTab'}
          onPress={() => {
            setSelectedTab('yellowTab');
          }}
        >
          {renderContent('My')}
        </TabBar.Item>
      </TabBar>
    </div>
  );
}

export default TabBarExample;
