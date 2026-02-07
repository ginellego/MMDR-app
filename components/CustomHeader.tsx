import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  onMenuPress?: () => void;
}

export default function CustomHeader({ onMenuPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Logo Left */}
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Hamburger Right */}
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // light theme default
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 120,
    height: 40,
  },
});
