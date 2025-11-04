import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#0066CC' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>🎾 VENTURI</Text>
      <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', marginBottom: 30 }}>
        Transforma tu juego con análisis AI
      </Text>
      
      <Link href="/login" asChild>
        <TouchableOpacity style={{
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 8,
          width: '100%',
          alignItems: 'center',
          marginBottom: 10
        }}>
          <Text style={{ color: '#0066CC', fontWeight: '600' }}>Comenzar</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/login" asChild>
        <TouchableOpacity style={{ padding: 15 }}>
          <Text style={{ color: 'white' }}>Ya tengo cuenta</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
