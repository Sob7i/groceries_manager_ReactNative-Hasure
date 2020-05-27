import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View, Button, Text } from 'native-base';

import ListForm from './list-form';

export default () => {
  const [islistFormOpen, setListFormOpen] = useState(false);
  const handleCreateList = () => {
    setListFormOpen(true);
    console.log('worked!');
  };
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
        <View style={styles.btn}>
          <ListForm
            islistFormOpen={islistFormOpen}
            setListFormOpen={setListFormOpen}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: ' 80%',
    top: '30%',
    marginBottom: '5%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

/*
    {
      <>
        <Text>Recently created lists</Text>
          <FlatList
          style={styles.container}
        data={messages}
        renderItem={({item}) => <Message key={item.id} {...item} />}
        keyExtractor={(item, index) => `message-${index}`}
        /> 
      </>
    }
*/
