import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function ProcessingScreen() {
  useEffect(() => {
    // Simular procesamiento
    const timer = setTimeout(() => {
      router.replace('/analysis/123');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator size="large" color="#0066CC" style={styles.loader} />
        <Text style={styles.title}>Procesando tu video...</Text>
        <Text style={styles.subtitle}>Nuestra IA está analizando tu juego</Text>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>65% completado</Text>
        </View>

        <View style={styles.stepsContainer}>
          <Text style={styles.step}>✓ Detectando jugador</Text>
          <Text style={styles.step}>✓ Identificando golpes</Text>
          <Text style={styles.stepCurrent}>🔄 Calculando precisión</Text>
          <Text style={styles.stepPending}>⏳ Generando reporte</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loader: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  progressContainer: {
    width: '100%',
    marginBottom: 30,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0066CC',
    borderRadius: 4,
    width: '65%',
  },
  progressText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  stepsContainer: {
    width: '100%',
    maxWidth: 300,
  },
  step: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 10,
  },
  stepCurrent: {
    fontSize: 16,
    color: '#0066CC',
    marginBottom: 10,
    fontWeight: '600',
  },
  stepPending: {
    fontSize: 16,
    color: '#999',
    marginBottom: 10,
  },
});