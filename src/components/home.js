import React from 'react';
import { Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import './home.css';


function Home(props) {
  return (
    <div className="header-wrapper">
      <Button type="primary" onClick={() => props.history.push('/detail')}>回到Detail</Button>
    </div>
  );
}

export default withRouter((Home));
