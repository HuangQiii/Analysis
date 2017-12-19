// 此处可以引入react-redux和store和saga等
import React, { Component } from 'react';
import Routerr from './containers/app';

class Root extends Component {
    constructor(props, context) {
        super(props);
        console.log('root props: ', this.props);
    }

    render() {
        return (
            <Routerr proId={this.props.proId} />
        );
    }
}

export default Root;