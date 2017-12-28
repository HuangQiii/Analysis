import React, { Component } from 'react';
import Router from './containers/app';

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router
                //orgId={this.props.orgId}
                orgId={1}
                //proId={this.props.proId}
                proId={137}
                appPath={this.props.appPath}
            />
        );
    }
}

export default Root;