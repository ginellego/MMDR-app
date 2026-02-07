import { Text } from 'react-native';

export default function Feed() {
  console.log('FEED ROUTE LOADED');
  return <Text>Feed screen</Text>;
}

export function FeedPreview() {
  return (
    <Text>Feed preview</Text>
  );
}