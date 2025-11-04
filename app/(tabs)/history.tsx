import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const mockHistory = [
  { id: '1', date: '2024-01-15', title: 'Partido vs Juan', duration: '45 min', accuracy: '87%' },
  { id: '2', date: '2024-01-12', title: 'Práctica de saques', duration: '30 min', accuracy: '92%' },
  { id: '3', date: '2024-01-10', title: 'Partido vs María', duration: '60 min', accuracy: '85%' },
  { id: '4', date: '2024-01-08', title: 'Práctica de voleas', duration: '25 min', accuracy: '89%' },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Historial</Text>
      <Text style={styles.subtitle}>Tus análisis anteriores</Text>
      
      <ScrollView style={styles.historyList}>
        {mockHistory.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.historyItem}
            onPress={() => router.push(`/analysis/${item.id}`)}
          >
            <View style={styles.historyHeader}>
              <Text style={styles.historyTitle}>{item.title}</Text>
              <Text style={styles.historyDate}>{item.date}</Text>
            </View>
            <View style={styles.historyDetails}>
              <Text style={styles.historyDetail}>⏱️ {item.duration}</Text>
              <Text style={styles.historyAccuracy}>🎯 {item.accuracy} precisión</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => {}}
      >
        <Text style={styles.clearButtonText}>🗑️ Limpiar historial</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  historyList: {
    flex: 1,
  },
  historyItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  historyDate: {
    fontSize: 14,
    color: '#666',
  },
  historyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  historyDetail: {
    fontSize: 14,
    color: '#666',
  },
  historyAccuracy: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: '500',
  },
  clearButton: {
    backgroundColor: '#FF4444',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});