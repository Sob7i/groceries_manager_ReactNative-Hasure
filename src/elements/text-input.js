import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function StyledTextInput(props) {
  const { value, onChangeText, maxLength } = props;

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      justifyContent: 'center',
      ...props.style,
    },
  });

  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholder={value}
      onChangeText={onChangeText}
      defaultValue={value}
      maxLength={maxLength}
    />
  );
}
