import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  console.log('HOME ROUTE LOADED');
  return (
    <View>
      <Text>Home screen</Text>
      <Link href="/(drawer)/(tabs)/calendar">Calendar</Link>
      <Link href="/(drawer)/(tabs)/alerts">Alerts</Link> 
      <Link href="/(drawer)/(tabs)/feed">Feed</Link>

    </View>
    );
}