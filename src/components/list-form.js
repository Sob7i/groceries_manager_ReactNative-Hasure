import React, {useContext} from 'react';
import { StyleSheet, Keyboard, View } from 'react-native';
import { Text, Button } from 'native-base';

import StyledTextInput from '../elements/text-input';
import GlobalState from '../helpers/global-state';

export default ({ setListFormOpen, navigation }) => {
  const [global, setGlobal] = useContext(GlobalState)

  const submitMessage = () => {
    // setText('');
    // submit(text);
    Keyboard.dismiss();
    navigation.navigate('CreatedlistScreen')
  };
  const handleCancelList = () => setListFormOpen(false);

  return (
    <View style={styles.container}>
      <StyledTextInput
        value={global.text}
        onChangeText={(txt) => setGlobal({text: txt})}
        onSubmitEditing={submitMessage}
        maxLength={80}
        autoFocus
        editable
      />
      <View style={styles.optionsBtns}>
        <Button
          dark
          onPress={submitMessage}
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
