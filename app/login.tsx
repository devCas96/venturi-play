import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>
      <Text style={{ textAlign: 'center', marginBottom: 30, color: '#666' }}>
        Pantalla de login - por implementar
      </Text>
      
      <TouchableOpacity
        style={{
          backgroundColor: '#0066CC',
          padding: 15,
          borderRadius: 8,
          width: '100%',
          alignItems: 'center',
          marginBottom: 10
        }}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={{ color: 'white', fontWeight: '600' }}>Mock Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: 15 }}
        onPress={() => router.push('/signup')}
      >
        <Text style={{ color: '#0066CC' }}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}