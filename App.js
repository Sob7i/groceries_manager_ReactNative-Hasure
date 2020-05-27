import * as React from 'react';
import { Platform, StyleSheet, StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListsScreen from './src/screens/lists-screen'

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <ListsScreen />
    //   <Createlist />
    // </View>
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
        <Stack.Screen name="Createlist" component={ListsScreen} />
        {/* <Stack.Screen
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
        /> */}
      </Stack.Navigator>
    </>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
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