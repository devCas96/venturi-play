import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function ResultsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>📊 Análisis #{id}</Text>
          <Text style={styles.subtitle}>15 de enero, 2024</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumen general</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>87%</Text>
              <Text style={styles.statLabel}>Precisión</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Golpes</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Errores</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tipos de golpes</Text>
          <View style={styles.skillItem}>
            <Text style={styles.skillName}>Derecha</Text>
            <Text style={styles.skillValue}>85% (20/23)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillName}>Reves</Text>
            <Text style={styles.skillValue}>78% (14/18)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillName}>Saque</Text>
            <Text style={styles.skillValue}>92% (4/4)</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Áreas de mejora</Text>
          <Text style={styles.improvementText}>• Postura al golpear derechas</Text>
          <Text style={styles.improvementText}>• Seguimiento del reves</Text>
          <Text style={styles.improvementText}>• Posicionamiento en la cancha</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recomendaciones</Text>
          <Text style={styles.recommendationText}>💡 Practica tu derecha con ejercicios de repetición</Text>
          <Text style={styles.recommendationText}>💡 Trabaja en la consistencia de tu reves</Text>
          <Text style={styles.recommendationText}>💡 Mejora tu movimiento lateral</Text>
        </View>
      </ScrollView>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/camera')}
        >
          <Text style={styles.primaryButtonText}>🎥 Grabar otro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/(tabs)/history')}
        >
          <Text style={styles.secondaryButtonText}>📋 Ver historial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  skillName: {
    fontSize: 16,
    color: '#333',
  },
  skillValue: {
    fontSize: 16,
    color: '#0066CC',
    fontWeight: '500',
  },
  improvementText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  recommendationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  actions: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  primaryButton: {
    backgroundColor: '#0066CC',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0066CC',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: '600',
  },
});