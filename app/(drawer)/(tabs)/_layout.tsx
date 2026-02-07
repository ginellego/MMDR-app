import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            home: 'home',
            feed: 'list',
            alerts: 'warning-outline',
            faq: 'help-circle',
            settings: 'settings',
          } as const;

          return (
            <Ionicons
              name={icons[route.name as keyof typeof icons]}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="feed" />
      <Tabs.Screen name="alerts" />
      <Tabs.Screen name="faq" />
      <Tabs.Screen name="settings" />
      <Tabs.Screen
        name="calendar"
        options={{
          href: null   
        }}
      />
    </Tabs>
  );
}
