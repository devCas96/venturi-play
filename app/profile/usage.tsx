import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function UsageScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumen de Uso</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Análisis realizados</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8.5h</Text>
            <Text style={styles.statLabel}>Tiempo total</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Videos grabados</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estadísticas por Semana</Text>
        
        <View style={styles.weekStats}>
          <View style={styles.weekItem}>
            <Text style={styles.weekDay}>Esta semana</Text>
            <Text style={styles.weekValue}>5 análisis</Text>
          </View>
          
          <View style={styles.weekItem}>
            <Text style={styles.weekDay}>Semana pasada</Text>
            <Text style={styles.weekValue}>7 análisis</Text>
          </View>
          
          <View style={styles.weekItem}>
            <Text style={styles.weekDay}>Hace 2 semanas</Text>
            <Text style={styles.weekValue}>4 análisis</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rendimiento</Text>
        
        <View style={styles.performanceItem}>
          <Text style={styles.performanceLabel}>Precisión promedio</Text>
          <Text style={styles.performanceValue}>82%</Text>
        </View>
        
        <View style={styles.performanceItem}>
          <Text style={styles.performanceLabel}>Mejor sesión</Text>
          <Text style={styles.performanceValue}>94%</Text>
        </View>
        
        <View style={styles.performanceItem}>
          <Text style={styles.performanceLabel}>Progreso mensual</Text>
          <Text style={styles.performanceValue}>+12%</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Almacenamiento</Text>
        
        <View style={styles.storageContainer}>
          <View style={styles.storageInfo}>
            <Text style={styles.storageLabel}>Espacio usado</Text>
            <Text style={styles.storageValue}>2.4 GB / 5 GB</Text>
          </View>
          
          <View style={styles.storageBar}>
            <View style={[styles.storageFill, { width: '48%' }]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  weekStats: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 15,
  },
  weekItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  weekDay: {
    fontSize: 14,
    color: '#666',
  },
  weekValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  performanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  performanceLabel: {
    fontSize: 14,
    color: '#666',
  },
  performanceValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0066CC',
  },
  storageContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 15,
  },
  storageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  storageLabel: {
    fontSize: 14,
    color: '#666',
  },
  storageValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  storageBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  storageFill: {
    height: '100%',
    backgroundColor: '#0066CC',
    borderRadius: 4,
  },
});