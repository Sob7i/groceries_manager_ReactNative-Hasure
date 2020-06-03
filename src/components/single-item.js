import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, CardItem, Icon, Text, Right } from 'native-base';

export default ({ name }) => (
  <Card style={styles.card}>
    <CardItem>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.icons}>
        <Icon active name='add' style={styles.add} />
        <Icon name='remove' style={styles.delete} />
      </View>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    padding: 2,
    flexDirection: 'row',
  },
  text: {
    color: 'grey',
  },
  add: {
    alignSelf: 'flex-end'
  },
  delete: {
    alignSelf: 'flex-end'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: '1%',
  },
});
