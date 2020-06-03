import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Right } from 'native-base';

import StyledTextInput from '../elements/text-input';

export default ({ newItem, setNewItem, handleAddItems }) => {
  return (
    <View style={styles.container}>
      <StyledTextInput
        value={newItem}
        onChangeText={(item) => setNewItem(item)}
        onSubmitEditing={handleAddItems}
        maxLength={40}
        editable
        style={styles.textInput}
      />
        <Button bordered onPress={handleAddItems} style={styles.addButton}>
          <Text style={{ color: '#2666f6' }}>Add</Text>
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 70
  },
  textInput: {
    paddingHorizontal: 10,
    marginHorizontal: 7,
    marginVertical: 9,
    width: '78%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#2666f6',
    borderBottomColor: '#2666f6',
    borderRadius: 3,
    height: 45
  },
  addButton: {
    justifyContent: 'center',
    marginHorizontal: 7,
    marginVertical: 9,
    width: '15%',
    borderRadius: 3
  }
});
