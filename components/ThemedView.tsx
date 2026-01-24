// components/ThemedView.tsx
import React from 'react';
import { View, ViewProps, useColorScheme } from 'react-native';

export const ThemedView: React.FC<ViewProps> = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#111' : '#fff';

  return (
    <View style={[{ backgroundColor }, style]} {...props}>
      {children}
    </View>
  );
};
