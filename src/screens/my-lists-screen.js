import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { Icon, Button, Fab } from 'native-base';

// import GlobalState from '../helpers/global-state';
import AddListItem from '../components/add-list-item';
import LisItems from '../components/list-items';
import appStyles from '../styles/app-styles';

export default () => {
  // const [global, setGlobal] = useContext(GlobalState);
  // const [isInputOpen, setInputOpen] = useState(false);
  // const [isActive, setActive] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState('type here!');

  function handleAddItems() {
    const newList = {
      id: Math.random(),
      name: newItem,
    };
    setListItems([...listItems, newList]);
  }

  // console.log('listItems', listItems);
  // console.log('newItem', newItem);

  return (
    <View style={styles.container}>
      <AddListItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItems={handleAddItems}
      />
      <View style={styles.listItems}>
        <LisItems listItems={listItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...appStyles,
  listItems: {
    flex: 2,
    backgroundColor: '#c0baaf38',
    width: '96%',
    marginHorizontal: 7,
    // marginVertical: 1,
    // marginBottom: 25,
    borderColor: '#c0baaf6e',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
  },
});

{
  /* <TouchableOpacity style={styles.footer} onPress={hanldeToggleOpen}>
        <View style={styles.addItem}>
          <Icon name='add' style={styles.icon} />
          <Text style={styles.text}>Add items</Text>
        </View>
      </TouchableOpacity> */
}
{
  /* <Fab
        active={isActive}
        direction='up'
        containerStyle={{}}
        style={{
          backgroundColor: '#5067FF',
          alignContent: 'center',
          // alignItems: 'center',
          // alignSelf: 'center',
          justifyContent: 'center',
        }}
        position='topRight'
        onPress={handleAddItems}
      >
        <Icon name='add' style={styles.icon} />
      </Fab> */
}
