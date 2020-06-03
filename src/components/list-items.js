import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import SingleItem from './single-item';
import appStyles from '../styles/app-styles';
import { View } from 'react-native-animatable';

export default ({ listItems }) =>
  !!listItems.length ? (
    <View style={styles.container}>
      {listItems.map((item) => (
        <SingleItem key={item.id} name={item.name} />
      ))}
    </View>
  ) : (
    <View />
  );

const styles = StyleSheet.create({
  ...appStyles,
});
// <FlatList
//   style={styles.container}
//   data={listItems}
//   renderItem={({item}) => <SingleItem key={item.id} name={item.name} />}
//   keyExtractor={(item, index) => `item-${index}`}
// />
