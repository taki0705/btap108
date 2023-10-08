import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import MainScreen9 from './screens/MainScreen9';
import MainScreen8 from './screens/MainScreen8 ';
import MainScreen11 from './screens/MainScreen11';
import MainScreen12 from './screens/MainScreen12';
import MainScreen7 from './screens/MainScreen7';

const Stack =createStackNavigator();
export default function App() {
  return (
    <MainScreen7/>
//  <NavigationContainer>
//        <Stack.Navigator initialRouteName="HomeScreen" >
//        </Stack.Navigator>
//      </NavigationContainer>
  );
}
