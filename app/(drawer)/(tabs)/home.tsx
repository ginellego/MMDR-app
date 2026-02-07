import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { CalendarPreview } from './calendar';
import { AlertsPreview } from './alerts';
import { FeedPreview } from './feed';

export default function Home() {
  console.log('HOME ROUTE LOADED');
  return (
    <View >
      <ScrollView >
        <View >
          <Text style={styles.breadcrumb}>Home</Text>
        </View>
        <View style={styles.card}>
          <Link href="/(drawer)/(tabs)/calendar" style={styles.title}>Event Calendar</Link>
          <CalendarPreview />
        </View>
        <View style={styles.card}>
          <Link href="/(drawer)/(tabs)/alerts" style={styles.title}>Alerts</Link> 
          <AlertsPreview />
        </View>
        <View style={styles.card}>
          <Link href="/(drawer)/(tabs)/feed" style={styles.title} >Feed</Link>
          <FeedPreview />
        </View>
      </ScrollView>

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    maxWidth: '90%',
    minWidth: 500,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
  },
  breadcrumb: {
    fontSize: 14,
    color: '#888',
    paddingTop: 10,
    paddingLeft: 10,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '90%',
  },
});