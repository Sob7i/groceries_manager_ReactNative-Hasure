import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, Text } from 'react-native';

// import Createlist from '../components/create-list';
import appStyles from '../styles/app-styles';
import CardBtn from '../elements/card-btn';

export default ({ navigation }) => {
  return (
    // <ImageBackground
    //   source={require('../assets/bg.jpg')}
    //   style={styles.container}
    // >
      <SafeAreaView>
        {/* <Createlist navigation={navigation} /> */}
        <CardBtn />
      </SafeAreaView>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...appStyles,
});
