import React from 'react';
import { TextInput, Keyboard, View } from 'react-native';

// function styledTextInput(props) {
//   return (
//     <TextInput
//       {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//       editable
//       maxLength={40}
//     />
//   );
// }

export default function StyledTextInput(props) {
  const { value = '', onChangeText } = props;
  return (
    <View
      style={{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}
    >
      <TextInput
        {...props}
        editable
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
