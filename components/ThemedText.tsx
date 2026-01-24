// components/ThemedText.tsx
import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

interface ThemedTextProps extends TextProps {
  type?: 'title' | 'subtitle' | 'default' | 'defaultSemiBold';
}

export const ThemedText: React.FC<ThemedTextProps> = ({ type = 'default', style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#000';

  let fontSize = 16;
  let fontWeight: TextProps['style']['fontWeight'] = '400';

  switch (type) {
    case 'title':
      fontSize = 24;
      fontWeight = '700';
      break;
    case 'subtitle':
      fontSize = 18;
      fontWeight = '600';
      break;
    case 'defaultSemiBold':
      fontWeight = '600';
      break;
  }

  return (
    <Text style={[{ color, fontSize, fontWeight }, style]} {...props}>
      {children}
    </Text>
  );
};
