import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Header, View } from 'native-base';

import ListForm from './list-form';

export default () => {
  const [islistFormOpen, setListFormOpen] = useState(false);
  const handleCreateList = () => {
    setListFormOpen(true);
    console.log('worked!');
  };
  return (
    <View>
      {/* <Header /> */}
      <Button
        onPress={handleCreateList}
        title='+ create a new list'
        color='#841584'
        style={styles.btn}
        accessibilityLabel='Learn more about this purple button'
      />
      {islistFormOpen && (
        <ListForm
          islistFormOpen={islistFormOpen}
          setListFormOpen={setListFormOpen}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    color: 'black',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
