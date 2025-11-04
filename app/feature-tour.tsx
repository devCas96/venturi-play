import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function FeatureTourScreen() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>
          Descubre VENTURI
        </Text>

        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10 }}>🎥 Graba tu juego</Text>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Graba tus partidos o sesiones de práctica
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10 }}>🤖 Análisis AI</Text>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Nuestra AI analiza automáticamente tus golpes y movimientos
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10 }}>📊 Mejora constante</Text>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Sigue tu progreso y identifica áreas de mejora
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: '#0066CC',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center'
        }}
        onPress={() => router.push('/permissions')}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}