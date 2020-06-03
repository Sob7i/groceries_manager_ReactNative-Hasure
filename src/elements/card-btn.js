import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Icon, Text } from 'native-base';
import appStyles from '../styles/app-styles';

export default () => {
  return (
    <>
      <TouchableOpacity onPress={(() => console.log('hii'))}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Image
              style={styles.img}
              blurRadius={1}
              resizeMode='cover'
              source={require('../assets/checkList.jpg')}
            />
            <Text style={styles.title}>Create a check list</Text>
            <Text style={styles.subtitle}>
              {' '}
              Start creating your checklist and benfit from a set of cool
              features{' '}
            </Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Image
              style={styles.img}
              blurRadius={1}
              resizeMode='cover'
              source={require('../assets/bg.jpg')}
            />
            <Text style={styles.title}>Create a groceries list</Text>
            <Text style={styles.subtitle}>
              Start creating your groceries list and benfit from a set of cool
              features{' '}
            </Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    alignSelf: 'center',

    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    elevation: 1,
  },
  cardItem: {
    flexDirection: 'column',
    paddingTop: 0,
  },
  img: {
    width: 350,
    height: 200,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'flex-start',
  },
});
