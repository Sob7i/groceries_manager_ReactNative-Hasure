import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import GlobalState from '../helpers/global-state';

export default () => {
  const [global, setGlobal] = useContext(GlobalState);

  return (
    <View>
      <Text>Hiii {global.text}</Text>
    </View>
  );
};
