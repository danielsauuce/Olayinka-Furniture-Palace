import { Stack } from 'expo-router';
import SafeScreen from '../src/components/safeScreen';

export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeScreen>
  );
}
