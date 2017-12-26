import React, { Component } from 'react';
import Router from './containers/app';

class Root extends Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        return (
            <Router
                orgId={this.props.orgId}
                //proId={this.props.proId}
                proId={185}
                appPath={this.props.appPath}
            />
        );
    }
}

export default Root;