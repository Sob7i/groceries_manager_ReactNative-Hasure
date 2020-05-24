import React from 'react';
import { StyleSheet, Button} from 'react-native';
import {
  Form,
  Item,
  Input,
  View,
  Text,
} from 'native-base';
  
export default ({islistFormOpen,setListFormOpen}) => {
    const handleCancelList = () => {
        setListFormOpen(false);
      };
  return (
    <View  style={styles.container}>
        <Form>
          <Item>
            <Input placeholder='Username' />
          </Item>
        </Form>
        <Button
            // onPress={handleCreateList}
            title='Create'
            color='#841584'
            // style={styles.btn}
            accessibilityLabel='Create'
      />
      <Button
            onPress={handleCancelList}
            title='Cancel'
            color='#841584'
            // style={styles.btn}
            accessibilityLabel='Cancel'
      />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});