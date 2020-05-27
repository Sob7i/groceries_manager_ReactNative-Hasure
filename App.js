import * as React from 'react';
import { Platform, StyleSheet, StatusBar, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListsScreen from './src/screens/lists-screen';
import CreatedlistScreen from './src/screens/created-list-screen';
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
          <Stack.Screen name='Home' component={ListsScreen} />
          <Stack.Screen name='My lists' component={CreatedlistScreen} />
        </Stack.Navigator>
      </GlobalState.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

/*
   <NavigationContainer>
        <>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#006655',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen name="Conversations" component={ConvesationsScreen} />
            <Stack.Screen
              name="ChatViewScreen"
              component={ChatViewScreen}
              options={({route, navigation}) => ({
                title: route.params?.title,
                headerLeft: () => (
                  <Icon
                    name="chevron-left"
                    size={40}
                    color="#ffffff"
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </>
      </NavigationContainer>
*/
