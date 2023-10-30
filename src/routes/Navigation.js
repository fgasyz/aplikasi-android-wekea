import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import HomePage from '../pages/HomePage'
import LovePage from '../pages/LovePage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapsPage from '../pages/MapsPage';
import CartPage from '../pages/CartPage';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const iconsFocused = {
  Home: 'home',
  Maps: 'map',
  Heart: 'heart',
  Cart: 'cart'
}
const iconsNotFocused = {
  Home: 'home-outline',
  Maps: 'map-outline',
  Heart: 'heart-outline',
  Cart: 'cart-outline'
}

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={
      ({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={focused ? iconsFocused[route.name] : iconsNotFocused[route.name] } color={focused ? 'teal' : 'grey'} size={size}/>
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginBottom: 10,
          marginHorizontal: 10,
          borderRadius: 10,
        },
        tabBarHideOnKeyboard: true
      })
      }>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Maps" component={MapsPage} />
      <Tab.Screen name="Cart" component={CartPage} />
      <Tab.Screen name="Heart" component={LovePage} />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={BottomTab} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
