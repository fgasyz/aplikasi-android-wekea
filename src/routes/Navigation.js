import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomePage from '../pages/HomePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapsPage from '../pages/MapsPage';
import CartPage from '../pages/CartPage';
import TransactionPage from '../pages/TransactionPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import MenuPage from '../pages/MenuPage';
import {IconButton} from 'react-native-paper';
import GlobalStyles from '../public/GlobalStyles';
import ProfilDetailPage from '../pages/ProfilDetailPage';
import Colors from '../constants/Colors.js';
import AllProductPage from '../pages/AllProductPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const iconsFocused = {
  Home: 'home',
  Maps: 'map',
  Cart: 'cart',
  Transaction: 'receipt',
};
const iconsNotFocused = {
  Home: 'home-outline',
  Maps: 'map-outline',
  Cart: 'cart-outline',
  Transaction: 'receipt-outline',
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons
              name={
                focused ? iconsFocused[route.name] : iconsNotFocused[route.name]
              }
              color={focused ? Colors.red : 'grey'}
              size={size}
            />
          );
        },

        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 10,
        },
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Maps"
        component={MapsPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          headerTitle: 'Keranjang',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Colors.marronRed},
          tabBarBadge: 6,
          tabBarBadgeStyle: {backgroundColor: Colors.red, color: 'white'},
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionPage}
        options={{
          headerStyle: {backgroundColor: Colors.marronRed},
          headerTitle: 'Transaksi',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={ProductDetailPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuPage}
          options={({navigation}) => ({
            gestureEnabled: true,
            presentation: 'modal',
            headerStyle: {backgroundColor: Colors.marronRed},
            headerLeft: () => (
              <IconButton
                iconColor={'#fff'}
                icon="chevron-left"
                size={30}
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitleAlign: 'center',
            headerTitleStyle: {...GlobalStyles.mediumFont, color: '#fff'},
          })}
        />
        <Stack.Screen
          name="DetailProfile"
          component={ProfilDetailPage}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: Colors.marronRed},
            headerLeft: () => (
              <IconButton
                iconColor={'#fff'}
                icon="arrow-left"
                size={30}
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitleAlign: 'center',
            headerTitle: 'Detail Pengguna',
            headerTitleStyle: {...GlobalStyles.mediumFont, color: '#fff'},
          })}
        />
        <Stack.Screen
          name="AllProduct"
          component={AllProductPage}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: Colors.marronRed},
            headerLeft: () => (
              <IconButton
                iconColor={'#fff'}
                icon="arrow-left"
                size={30}
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitleAlign: 'center',
            headerTitle: 'Semua Produk',
            headerTitleStyle: {...GlobalStyles.mediumFont, color: '#fff'},
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
