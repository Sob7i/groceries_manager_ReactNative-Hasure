import React, { useState, lazy, Suspense, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Text } from 'native-base';
import * as Animatable from 'react-native-animatable';
import AnimatedLoader from 'react-native-animated-loader';

// import ListForm from './list-form';
const ListForm = lazy(() => import('./list-form'));

export default ({ navigation }) => {
  const [islistFormOpen, setListFormOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleCreateList = () => setListFormOpen(true);

  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 30000);
  });
  return (
    <View style={styles.container}>
      {!islistFormOpen && (
        <>
          <Button
            light
            onPress={handleCreateList}
            style={styles.btn}
            accessibilityLabel='Learn more about this purple button'
          >
            <Text>+ Create a check list</Text>
          </Button>
          <Button
            dark
            onPress={handleCreateList}
            style={styles.btn}
            accessibilityLabel='Learn more about this purple button'
          >
            <Text>+ Create a groceries list</Text>
          </Button>
        </>
      )}
      
      {islistFormOpen && (
        <Animatable.View
          duration={300}
          animation='slideInRight'
          // style={[styles.message, incoming ? styles.incomingMessage : null]}
        >
          <View style={styles.btn}>
            <Suspense
              fallback={
                <View><Text>loading ...</Text></View>
                // <AnimatedLoader
                //   visible={visible}
                //   overlayColor='rgba(255,255,255,0.75)'
                //   source={require('../assets/loader.json')}
                //   animationStyle={styles.lottie}
                //   speed={1}
                // />
              }
            >
              <ListForm
                navigation={navigation}
                islistFormOpen={islistFormOpen}
                setListFormOpen={setListFormOpen}
              />
            </Suspense>
          </View>
        </Animatable.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    // backgroundColor: 'gold',
    width: ' 80%',
    top: '30%',
    marginBottom: '5%',
    justifyContent: 'center',
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
