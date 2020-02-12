import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './src/screen/Auth/Auth';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import mainTabNavigator from './src/screen/mainTab/mainTab';
import store from './src/store/store';
import PlaceDetail from './src/screen/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screen/SideDrawer/SideDrawer';
import Icon from 'react-native-vector-icons/Ionicons';

const AppNavigator = createStackNavigator({
	Home: {
		screen: Auth,
	},
	Tabs: {
		screen: mainTabNavigator,
		navigationOptions: ({ navigation }) => ({
			headerLeft: () => (
				<Icon name="md-menu" size={30} onPress={() => {
					navigation.dispatch(DrawerActions.openDrawer());
				}}/>),
			headerLeftContainerStyle: {
				paddingLeft: 15,
			},
			headerTitle: (navigation.router?.getPathAndParamsForState(navigation.state) || {}).path,
		})
	},
	PlaceDetail: {
		screen: PlaceDetail,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params?.name,
		})
	}
}, {
	initialRouteName: 'Home'
});

const SideDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: AppNavigator,
		navigationOptions: {
			drawerIcon: <Icon name="md-home" size={30} />
		}
	},
	SignOut: {
		screen: SideDrawer,
		navigationOptions: {
			title: 'Log Out',
			drawerIcon: <Icon name="ios-log-out" size={30} />
		}
	}
}, {
	initialRouteName: 'Home',
});

const mapStateToProps = (state: any) => {
    return {
        places: state.place.places
    }
}

const Navigation = connect(mapStateToProps, null)(createAppContainer(SideDrawerNavigator));

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigation ></Navigation>
			</Provider>
		)
	}
};
