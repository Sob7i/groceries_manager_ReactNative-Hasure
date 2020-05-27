import React from 'react';
import { StyleSheet, Keyboard, View } from 'react-native';
import { Text, Button } from 'native-base';

import StyledTextInput from '../elements/text-input';

export default ({ setListFormOpen, navigation }) => {
  const [text, setText] = React.useState('Type here..');
  const submitMessage = () => {
    setText('');
    // submit(text);
    Keyboard.dismiss();
    navigation.navigate('CreatedlistScreen')
    console.log('navigation',navigation)
    console.log('text', text);
  };
  const handleCancelList = () => setListFormOpen(false);

  return (
    <View style={styles.container}>
      <StyledTextInput
        value={text}
        onChangeText={(txt) => setText(txt)}
        onSubmitEditing={submitMessage}
        maxLength={80}
        autoFocus
        editable
      />
      <View style={styles.optionsBtns}>
        <Button
          dark
          onPress={() => navigation.navigate('CreatedlistScreen')}
          style={styles.btn}
          accessibilityLabel='Create'
        >
          <Text>Create</Text>
        </Button>
        <Button
          light
          onPress={handleCancelList}
          style={styles.btn}
          accessibilityLabel='Cancel'
        >
          <Text>Cancel</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    marginTop: '50%',
  },
  btn: {
    justifyContent: 'center',
    width: '50%',
    marginTop: '10%',
    marginRight: '2%',
  },
  optionsBtns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // baseText: {
  //   marginBottom: '20%',
  //   marginTop: '10%',
  //   color: 'red',
  //   fontWeight: 'bold',
  //   fontFamily: "Cochin",
  //   fontSize: 40,
  // },
});
