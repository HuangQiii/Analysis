import React, { Component } from 'react';
import Router from './containers/app';

class Root extends Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        return (
            <Router
                orgId={this.props.bus.orgId}
                proId={this.props.bus.proId}
                appPath={this.props.bus.appPath}
                name={this.props.bus.name}
                showName={this.props.bus.showName}
            />
        );
    }
}

export default Root;