// components/ParallaxScrollView.tsx
import React from 'react';
import { ScrollView, View, StyleSheet, ViewStyle } from 'react-native';

interface ParallaxScrollViewProps {
  headerImage?: React.ReactNode;
  headerBackgroundColor?: { light: string; dark: string };
  children: React.ReactNode;
  style?: ViewStyle;
}

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  headerImage,
  headerBackgroundColor,
  children,
  style,
}) => {
  return (
    <ScrollView style={[styles.container, style]}>
      {headerImage && <View style={[styles.header, { backgroundColor: headerBackgroundColor?.light }]}>{headerImage}</View>}
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { height: 200, justifyContent: 'center', alignItems: 'center' },
});

export default ParallaxScrollView;
