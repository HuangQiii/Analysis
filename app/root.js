import React, { Component } from 'react';
import Router from './containers/app';

class Root extends Component {
    constructor(props, context) {
        super(props);
        console.log('root props: ', this.props);
    }

    render() {
        return (
            <Router
                orgId={this.props.orgId}
                proId={this.props.proId}
                appPath={this.props.appPath}
            />
        );
    }
}

export default Root;