import React, { useState } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';

export default () => {
  const [islistFormOpen, setListFormOpen] = useState(false);
  const handleCreateList = () => {
      setListFormOpen(true);
        console.log('worked!')
    }
  return (
    <View>
      <Button
        onPress={handleCreateList}
        title='+ create a new list'
        color='#841584'
        style={styles.btn}
        accessibilityLabel='Learn more about this purple button'
      />
    </View>
  );
};

const styles = StyleSheet.create({
    btn: {
        color: 'black',
        backgroundColor: '#F5FCFF'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });