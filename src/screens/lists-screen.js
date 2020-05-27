import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, Text } from 'react-native';

import Createlist from '../components/create-list';

export default () => {
  return (
    // <ImageBackground
    //   source={require('../assets/imgs/background.png')}
    //   style={styles.container}>
    <SafeAreaView>
      <Createlist />
    </SafeAreaView>
    //  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  //   ...ApplicationStyles,
});
