import { Redirect } from 'expo-router';
import { Platform } from 'react-native';

export default function Index() {
  console.log('PLATFORM:', Platform.OS);

  if (Platform.OS === 'web') {
    return <Redirect href="/(web)" />;
  }

  return <Redirect href="/(drawer)/(tabs)/home" />;
}

