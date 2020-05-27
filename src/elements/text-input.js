import React from 'react';
import {
  TextInput,
  Keyboard,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

export default function StyledTextInput(props) {
  const { value, onChangeText, maxLength } = props;
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <TextInput
          {...props}
          style={styles.input}
          placeholder={value}
          onChangeText={onChangeText}
          defaultValue={value}
          maxLength={maxLength}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '20%',
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
});
