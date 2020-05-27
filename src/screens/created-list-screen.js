import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'native-base';

import GlobalState from '../helpers/global-state';
import StyledTextInput from '../elements/text-input';

export default () => {
  const [global, setGlobal] = useContext(GlobalState);
  const [listItems, setListItems] = useState(global.listItems);
  const [isInputOpen, setInputOpen] = useState(false);

  const handleAddItems = (newItem) => {
    const newList = {
      id: Math.random(),
      name: newItem,
    };
    setListItems([...listItems, newList]);
  };

  const hanldeToggleOpen = () => setInputOpen(!isInputOpen);
  console.log('global',global)
  console.log('listItems', listItems);
  return (
    <View style={styles.container}>
      {!isInputOpen && (
        <TouchableOpacity style={styles.textAndIcon} onPress={hanldeToggleOpen}>
          <Icon name='add' style={styles.icon} />
          <Text style={styles.text}>Add items</Text>
        </TouchableOpacity>
      )}
      {!!isInputOpen && (
        <>
          <StyledTextInput
            value={''}
            onChangeText={(item) => setListItems(item)}
            onSubmitEditing={handleAddItems}
            maxLength={40}
            editable
          />
          <Button
            dark
            onPress={handleAddItems}
            style={styles.btn}
            accessibilityLabel='Create'
          >
            <Text>Create</Text>
          </Button>
          <Button
            light
            onPress={hanldeToggleOpen}
            style={styles.btn}
            accessibilityLabel='Cancel'
          >
            <Text>Cancel</Text>
          </Button>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
  },
  textAndIcon: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    // flex: 2,
    fontSize: 100,
    color: 'purple',
    justifyContent: 'center',
  },
});
