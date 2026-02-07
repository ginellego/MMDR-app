import { Text, View, StyleSheet} from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';

export default function CalendarMain() {
  console.log('CALENDAR ROUTE LOADED');
  return (
    <View >
      <Text style={styles.breadcrumb}>Event Calendar</Text>
      <Calendar />
    </View>
    
    );
}
export function CalendarPreview() {
  return (
    <Calendar
      
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#dd99ee'
      }}
      />
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
    padding: 10,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '90%',
  },
});