import { View, SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/components/screens/Home';
import Order from './src/components/screens/Order';
import Search from './src/components/screens/Search';
import SearchButton from '../food_delivery/src/assets/images/search-normal.svg';
import HomeButton from '../food_delivery/src/assets/images/Home.svg';
import OrderButton from '../food_delivery/src/assets/images/Order.svg';

export default function App() {
  const Tab = createBottomTabNavigator();
  const SearchTabIcon = () => (
    <View style={[styles.searchIconWrapper]}>
      <SearchButton width={30} height={30} />
    </View>
  );

  const HomeTabIcon = () => (
    <View style={styles.tabIconWrapper}>
      <HomeButton width={30} height={30} fill="blue" />
    </View>
  );

  const OrderTabIcon = () => (
    <View style={styles.tabIconWrapper}>
      <OrderButton width={30} height={30} fill="red" />
    </View>
  );

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.MainView}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor:"#000",
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabStyle: styles.tabItem,
            tabBarStyle: styles.tabBar,
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <HomeTabIcon />,
              tabBarLabel: 'Home',
              tabBarLabelStyle: styles.tabBarLabel,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: () => <SearchTabIcon />,
              tabBarLabel: '', 
            }}
          />
          <Tab.Screen
            name="Order"
            component={Order}
            options={{
              tabBarIcon: () => <OrderTabIcon />,
              tabBarLabel: 'Order',
              tabBarLabelStyle: styles.tabBarLabel,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  searchIconWrapper: {
    position: 'absolute',
    top: -28,
    alignSelf: 'center',
    backgroundColor: '#333335',
    padding: 15,
    borderRadius: 50,
  },
  tabBar: {
    height: 80,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    // borderWidth: 2,
    borderColor: 'black',
  },

  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold', 
    color: 'black',
    marginBottom: 15,
  },
});
