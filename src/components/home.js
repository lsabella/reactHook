import React from 'react';

export default class Home extends React.Component {
    render(){
        return (
            <div>
                <button onClick={() => this.props.history.push('/detail')}>回到Detail</button>
            </div>
        )
    }
}