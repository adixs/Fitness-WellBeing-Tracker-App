import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestScreen = ({ route }) => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(30);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      navigation.goBack();
    }
  }, [timer, navigation]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  const elapsedPercentage = ((30 - timer) / 30) * 100;

  return (
    <View style={styles.container(darkMode)}>
      <View style={styles.header(darkMode)}>
        <View style={styles.headerRow}>
          <Text style={styles.greetingText(darkMode)}>{getGreeting()}</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => setDarkMode(value)}
            thumbColor={darkMode ? '#4caf50' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <Text style={styles.subHeaderText(darkMode)}>Take a Break</Text>
      </View>

      <Text style={styles.title(darkMode)}>Rest Time</Text>
      <Text style={styles.timer}>{timer} seconds</Text>

      <View style={styles.progressSection}>
        <Text style={styles.progressText(darkMode)}>Time Elapsed</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${elapsedPercentage}%` }]} />
        </View>
        <Text style={styles.progressPercentage(darkMode)}>
          {elapsedPercentage.toFixed(0)}%
        </Text>
      </View>

      <View style={styles.tipsSection(darkMode)}>
        <Text style={styles.tipsTitle(darkMode)}>Today's Tip</Text>
        <Text style={styles.tipsText(darkMode)}>
          Remember to focus on your breathing during rest to recover faster!
        </Text>
      </View>

      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (darkMode) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    paddingHorizontal: 20,
  }),
  header: (darkMode) => ({
    backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
    width: '100%',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  }),
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  greetingText: (darkMode) => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? '#ffffff' : '#000000',
  }),
  subHeaderText: (darkMode) => ({
    fontSize: 18,
    color: darkMode ? '#ffffff' : '#000000',
    marginTop: 10,
  }),
  title: (darkMode) => ({
    fontSize: 32,
    fontWeight: 'bold',
    color: darkMode ? '#ffffff' : '#000000',
    marginBottom: 20,
  }),
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: 30,
  },
  progressSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  progressText: (darkMode) => ({
    fontSize: 18,
    fontWeight: 'bold',
    color: darkMode ? '#ffffff' : '#000000',
    marginBottom: 10,
  }),
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  progressPercentage: (darkMode) => ({
    fontSize: 16,
    color: darkMode ? '#ffffff' : '#000000',
    marginTop: 10,
  }),
  tipsSection: (darkMode) => ({
    backgroundColor: darkMode ? '#2a2a2a' : '#fffbf1',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 30,
    width: '100%',
  }),
  tipsTitle: (darkMode) => ({
    fontSize: 18,
    fontWeight: 'bold',
    color: darkMode ? '#ffffff' : '#333',
    marginBottom: 10,
  }),
  tipsText: (darkMode) => ({
    fontSize: 14,
    color: darkMode ? '#ccc' : '#555',
    lineHeight: 20,
  }),
  skipButton: {
    backgroundColor: '#198f51',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  skipText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RestScreen;