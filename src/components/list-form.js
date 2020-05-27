import React from 'react';
import { StyleSheet, Button, TextInput, Keyboard, View } from 'react-native';
// import { Form, Item, Input, Text } from 'native-base';

import StyledTextInput from '../elements/text-input';

export default ({ islistFormOpen, setListFormOpen }) => {
  const [text, setText] = React.useState('name');
  const submitMessage = () => {
    setText('');
    // submit(text);
    Keyboard.dismiss();
    console.log('text', text);
  };
  const handleCancelList = () => {
    setListFormOpen(false);
  };
  return (
    <View style={styles.container}>
      {/* <Form> */}
      <StyledTextInput
        style={styles.composeText}
        value={text}
        onChangeText={(txt) => setText(txt)}
        onSubmitEditing={submitMessage}
        maxLength={60}
      />
      <Button onPress={submitMessage} title='Send' />
      {/* </Form> */}
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
    // flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  composeText: {
    // flex: 0.5,
    // justifyContent: 'center',
    // width: '80%',
    // margin: 'auto',
    // paddingHorizontal: 10,
    // alignItems: 'center',
    // height: 40,
    // backgroundColor: 'white',
    // borderColor: '#979797',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
});
