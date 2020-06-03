import * as React from 'react';
import { Platform, StyleSheet, StatusBar, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home-screen';
import MyLists from './src/screens/my-lists-screen';
import GlobalState from './src/helpers/global-state';

const Stack = createStackNavigator();

export default function App() {
  const [global, setGlobal] = React.useState({
    text: 'Type here..',
    listItems: [{'name': 'test item' , "id" : 1}]
  });
  return (
    <NavigationContainer>
      <GlobalState.Provider value={[global, setGlobal]}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='My lists' component={MyLists} />
        </Stack.Navigator>
      </GlobalState.Provider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
