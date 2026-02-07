import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Platform } from 'react-native';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
        {...props}>
      <DrawerItem
        label="Home"
        onPress={() => router.push('/(drawer)/(tabs)/home')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => router.push('/(drawer)/profile')}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {
          // logout logic
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer 
        screenOptions={{ 
            headerShown: true, 
            headerTitle: 'Manitoba Mutts', 
            swipeEnabled: Platform.OS === 'android',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} 
        justifyContent={'right'}
        />} />
  );
}
