import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Text style={styles.cameraText}>📹 Cámara</Text>
        <Text style={styles.cameraSubtext}>Simulación de vista previa</Text>
        <View style={styles.recordingIndicator}>
          <Text style={styles.recordingText}>● REC</Text>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.stopButton}
          onPress={() => router.push('/camera/processing')}
        >
          <Text style={styles.stopButtonText}>⏹️ Finalizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pauseButton}
          onPress={() => {}}
        >
          <Text style={styles.pauseButtonText}>⏸️ Pausar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Grabando: 00:45</Text>
        <Text style={styles.statusSubtext}>Calidad: HD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cameraText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  cameraSubtext: {
    fontSize: 16,
    color: '#ccc',
  },
  recordingIndicator: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  recordingText: {
    color: 'white',
    fontWeight: 'bold',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#111',
  },
  stopButton: {
    backgroundColor: '#FF4444',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  stopButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  pauseButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  pauseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  statusContainer: {
    backgroundColor: '#222',
    padding: 15,
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  statusSubtext: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
});