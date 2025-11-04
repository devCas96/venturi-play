import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="settings" options={{ title: 'Ajustes', headerShown: true }} />
      <Stack.Screen name="usage" options={{ title: 'Uso de la app', headerShown: true }} />
    </Stack>
  );
}