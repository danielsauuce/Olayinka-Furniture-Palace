import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-600">
        Olayinka Furniture Palace
      </Text>
      <Text className="mt-4 text-gray-600">
        React Native + Expo + TypeScript + Tailwind
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}