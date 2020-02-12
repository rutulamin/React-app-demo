import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FindPlace from '../FindPlace/FindPlace';
import SharePlace from '../SharePlace/SharePlace';
import Icon from 'react-native-vector-icons/Ionicons';
 
const mainTabNavigator = createMaterialBottomTabNavigator({
    FindPlace: {
        screen: FindPlace,
        navigationOptions: {
            tabBarLabel: 'Find Place',
        }
    },
    SharePlace: {
        screen: SharePlace,
    }
}, {
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    barStyle: {
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        backgroundColor: '#FFFFFF',
    },
    initialRouteName: 'FindPlace',
    labeled: false,
    activeColor: 'black',
    inactiveColor: 'gray'
});

const getTabBarIcon = (navigation: any, focused: any, tintColor: any) => {
    const { routeName } = navigation.state;
    let iconName = '';
    if (routeName === 'FindPlace') {
        iconName = 'md-search';
    } else if (routeName === 'SharePlace') {
        iconName = 'md-share';
    }

    // You can return any component that you like here!
    return <Icon name={iconName} size={25} color={tintColor} />;
};
  

export default mainTabNavigator;