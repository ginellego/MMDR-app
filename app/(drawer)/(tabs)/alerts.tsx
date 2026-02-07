import { Text, FlatList, FlatListComponent, View, StyleSheet } from 'react-native';

export default function Alerts() {
  console.log('ALERTS ROUTE LOADED');
  return (
    <View>
      <Text style={styles.breadcrumb}>Alerts</Text>
      <FlatList
        data={[{ id: '1', title: 'Alert 1' }, { id: '2', title: 'Alert 2' }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

export function AlertsPreview() {
  return (
    <View>
      <Text>Alert preview</Text>
      <FlatList
        data={[{ id: '1', title: 'Alert 1' }, { id: '2', title: 'Alert 2' }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
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
});