import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Button, Text } from 'native-base';

export default () => {
    return (
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
    )
}
