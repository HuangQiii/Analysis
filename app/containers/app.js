import React, { Component } from 'react';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import { Dimensions } from 'react-native';
import Guide from '../pages/Guide';
import Organization from '../pages/Organization';
import Overview from '../pages/Overview';
import Services from '../pages/Services';
import Member from '../pages/Member';
import Service from '../pages/Service';
import Target from '../pages/Target';
import Calendar from '../pages/Calendar';
import SelectBurnDown from '../pages/SelectBurnDown';
import SelectAccumulativeFlowGraph from '../pages/SelectAccumulativeFlowGraph';

const { width, height } = Dimensions.get('window');

const TabContainer = TabNavigator(
    {
        Overview: {
            screen: Overview,
            navigationOptions: {
                tabBarLabel: '概览',
            },
        },
        Services: {
            screen: Services,
            navigationOptions: {
                tabBarLabel: '服务',
            },
        },
        Member: {
            screen: Member,
            navigationOptions: {
                tabBarLabel: '成员',
            },
        },
    },
    {
        initialRouteName: 'Overview',
        lazy: true,
        swipeEnabled: false,
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: 'rgba(255,255,255,0.87)',
            inactiveTintColor: 'rgba(255,255,255,0.54)',
            showIcon: false,
            style: {
                backgroundColor: '#3F51B5',
                height: 47,
                elevation: 0,//Android
                shadowOpacity: 0,//iOS
                paddingLeft: width / 2 - (61 + 61 / 2)
            },
            indicatorStyle: {
                backgroundColor: 'rgba(255,255,255,0.87)',
                height: 3,
                marginLeft: width / 2 - (61 + 61 / 2)
            },
            tabStyle: {
                width: 61,
            },
            labelStyle: {
                fontSize: 14
            }
        }
    }
);

const App = StackNavigator(
    {
        // Guide: {
        //     screen: Guide,
        //     navigationOptions: {
        //         headerMode: 'none'
        //     }
        // },
        Calendar: { screen: Calendar },
        Home: {
            screen: TabContainer,
            navigationOptions: {
                headerTitle: '开发项目',
            }
        },
        Organization: {
            screen: Organization,
        },
        Service: {
            screen: Service,
        },
        Target: { screen: Target },
        SelectBurnDown: { screen: SelectBurnDown },
        SelectAccumulativeFlowGraph: { screen: SelectAccumulativeFlowGraph },
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3F51B5',
                elevation: 0,//Android
                shadowOpacity: 0,//iOS
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 18,
                alignSelf: 'center'
            },
            headerTintColor: '#fff'
        }
    }
);
const prevGetStateForAction = App.router.getStateForAction;
App.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    if (state && action.type === 'ReplaceCurrentScreenToTab') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: 0,
        };
    }
    if (state && action.type === 'BcakToCurrentScreen') {
        function findDateInArr(arr, propertyName, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][propertyName] == value) {
                    return i;
                }
            }
            return -1;
        }
        var i = findDateInArr(state.routes, 'routeName', action.routeName);
        console.log(i);
        if (i != -1) {
            var routes = state.routes.slice(0, i + 1);
        }
        return {
            ...state,
            routes,
            index: routes.length - 1,
        }
    }
    if (state && action.type === 'BcakToLatestScreenBeforeAndReload') {
        const routes = state.routes.slice(0, state.routes.length - 2);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    return prevGetStateForAction(action, state);
};

// export default App;

class Router extends Component {
    constructor(props, context) {
        super(props, context);
    }

    getProps() {
        return {
            proId: this.props.proId,
            orgId: this.props.orgId,
            appPath: this.props.appPath,
        }
    }

    render() {
        return <App screenProps={this.getProps()} />;
    }
}

export default Router;