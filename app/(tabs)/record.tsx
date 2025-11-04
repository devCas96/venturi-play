import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function RecordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎥 Grabar</Text>
      <Text style={styles.subtitle}>Captura tu juego</Text>
      
      <View style={styles.cameraContainer}>
        <Text style={styles.cameraText}>📹 Vista previa de cámara</Text>
        <Text style={styles.cameraSubtext}>La cámara aparecerá aquí</Text>
      </View>

      <TouchableOpacity
        style={styles.recordButton}
        onPress={() => router.push('/camera')}
      >
        <Text style={styles.recordButtonText}>🎬 Iniciar Grabación</Text>
      </TouchableOpacity>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>💡 Consejos para grabar:</Text>
        <Text style={styles.tip}>• Asegura buena iluminación</Text>
        <Text style={styles.tip}>• Mantén el teléfono estable</Text>
        <Text style={styles.tip}>• Graba desde ángulo lateral</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  cameraContainer: {
    backgroundColor: 'white',
    height: 200,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  cameraText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  cameraSubtext: {
    fontSize: 14,
    color: '#999',
  },
  recordButton: {
    backgroundColor: '#FF4444',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  recordButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  tipsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  tip: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});