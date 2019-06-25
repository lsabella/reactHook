import React from 'react';

export default class Detail extends React.Component {
    render(){
        return (
            <div>
                <button onClick={() => this.props.history.push('/')}>回到Home</button>
            </div>
        )
    }
}