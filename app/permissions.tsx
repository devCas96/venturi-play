import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function PermissionsScreen() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>
          Permisos necesarios
        </Text>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10 }}>📱 Cámara</Text>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Necesitamos acceso a tu cámara para grabar tus partidos
          </Text>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10 }}>📁 Galería</Text>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Para acceder a videos existentes de tu juego
          </Text>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10 }}>📍 Notificaciones</Text>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Para avisarte cuando tus análisis estén listos
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: '#0066CC',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 10
        }}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Conceder permisos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: 15 }}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={{ color: '#666' }}>Saltar por ahora</Text>
      </TouchableOpacity>
    </View>
  );
}