import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import ProductInfomation from './src/screens/ProductInfomation';
import FavoriteScreen from './src/screens/FavoriteScreen';
import SearchScreen from './src/screens/SearchScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import CheckoutScreen from './src/screens/CheckoutScreen';
import ShopInformation from './src/screens/ShopInformation';
import UserAddressScreen from './src/screens/UserAddressScreen';
import UserOrderScreen from './src/screens/UserOrderScreen';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name="Detail" component={ProductInfomation} options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name="Search" component={SearchScreen} options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name="Favorite" component={FavoriteScreen} options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name="LocationDetail" component={ShopInformation} options={{animation: 'slide_from_bottom'}}></Stack.Screen>      
        <Stack.Screen name="UserAddress" component={UserAddressScreen} options={{animation: 'slide_from_right'}}></Stack.Screen>      
        <Stack.Screen name="UserOrder" component={UserOrderScreen} options={{animation: 'slide_from_right'}}></Stack.Screen>      
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
