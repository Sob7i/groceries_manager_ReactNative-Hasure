import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

// import ApplicationStyles from '../styles/appstyles';
// import {getMessagesById, postMessage} from '../services/api';
import Createlist from '../components/create-list';
import StyledTextInput from '../elements/text-input';

export default () => {

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  return (
    // <ImageBackground
    //   source={require('../assets/imgs/background.png')}
    //   style={styles.container}>
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardVerticalOffset}
        // style={styles.container}
      >
          {/* <StyledTextInput /> */}
           <Createlist />
      </KeyboardAvoidingView>
    </SafeAreaView>
    //  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  //   ...ApplicationStyles,
});
