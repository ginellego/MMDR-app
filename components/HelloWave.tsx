// components/HelloWave.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

export const HelloWave: React.FC = (): JSX.Element => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: -1,
          duration: 300,
          useNativeDriver: true,
        })
