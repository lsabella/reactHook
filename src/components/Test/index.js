import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { ListView } from 'antd-mobile';
import ReactDOM from 'react-dom';
import './index.css';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i += 1) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj += 1) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

function ListViewExample() {
  const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
  const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

  const dataSource1 = new ListView.DataSource({
    getRowData,
    getSectionHeaderData: getSectionData,
    rowHasChanged: (row1, row2) => row1 !== row2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  });
  const [dataSource, setDataSource] = useState(dataSource1);
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState((document.documentElement.clientHeight * 3) / 4);
  const [hasMore] = useState(true);

  const lv = useRef();

  const initData = useCallback(
    () => {
      const hei = document.documentElement.clientHeight
      // eslint-disable-next-line react/no-find-dom-node
      - ReactDOM.findDOMNode(lv.current).parentNode.offsetTop;
      console.log(sectionIDs);
      console.log(rowIDs);
      setTimeout(() => {
        genData();
        setDataSource(dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs));
        setIsLoading(false);
        setHeight(hei);
      }, 600);
    },
    [dataSource],
  );

  useEffect(() => {
    initData();
  }, [initData]);

  const onEndReached = () => {
    if (isLoading && !hasMore) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      genData(pageIndex += 1);
      setDataSource(dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs));
      setIsLoading(false);
    }, 1000);
  };

  const separator = (sectionID, rowID) => (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  );
  let index = data.length - 1;
  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data.length - 1;
    }
    const obj = data[index];
    index -= 1;
    return (
      <div key={rowID} style={{ padding: '0 15px' }}>
        <div
          style={{
            lineHeight: '50px',
            color: '#888',
            fontSize: 18,
            borderBottom: '1px solid #F6F6F6',
          }}
        >{obj.title}
        </div>
        <div style={{ display: 'flex', padding: '15px 0' }}>
          <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
            <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ListView
      ref={lv}
      dataSource={dataSource}
      renderHeader={() => <span>header</span>}
      renderFooter={() => (
        <div style={{ padding: 30, textAlign: 'center' }}>
          {isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
      renderSectionHeader={sectionData => (
        <div>{`Task ${sectionData.split(' ')[1]}`}</div>
      )}
      renderRow={row}
      renderSeparator={separator}
      style={{
        height,
        overflow: 'auto',
      }}
      pageSize={4}
      onScroll={() => { console.log('scroll'); }}
      scrollRenderAheadDistance={500}
      onEndReached={onEndReached}
      onEndReachedThreshold={10}
    />
  );
}

export default ListViewExample;
