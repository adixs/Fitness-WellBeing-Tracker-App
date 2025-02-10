import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import FitnessCards from '../components/FitnessCards';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { calories, minutes, workout } = useContext(FitnessItems);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  const progress = workout / 10;

  return (
    <ScrollView style={styles.container(darkMode)}>
      <View style={styles.header(darkMode)}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText(darkMode)}>{getGreeting()}</Text>
          <TouchableOpacity onPress={() => setDarkMode(!darkMode)} style={styles.toggleButton(darkMode)}>
            {darkMode ? (
              <Ionicons name="sunny" size={20} color="white" />
            ) : (
              <Ionicons name="moon" size={20} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeaderText(darkMode)}>SIX PACK IN 30 DAYS</Text>
      </View>

      <View style={styles.cardsRow}>
        <View style={styles.shadowCard(darkMode)}>
          <Text style={styles.cardText(darkMode)}>{calories.toFixed(2)}</Text>
          <Text style={styles.cardSubText(darkMode)}>KCAL</Text>
        </View>
        <View style={styles.shadowCard(darkMode)}>
          <Text style={styles.cardText(darkMode)}>{workout}</Text>
          <Text style={styles.cardSubText(darkMode)}>WORKOUTS</Text>
        </View>
        <View style={styles.shadowCard(darkMode)}>
          <Text style={styles.cardText(darkMode)}>{minutes}</Text>
          <Text style={styles.cardSubText(darkMode)}>MINUTES</Text>
        </View>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.progressText(darkMode)}>Workout Progress</Text>
        <ProgressBar progress={progress} color="#4caf50" style={styles.progressBar} />
        <Text style={styles.progressPercentage(darkMode)}>{Math.min((progress * 100).toFixed(0), 100)}%</Text>
      </View>

      <View style={styles.tipsSection(darkMode)}>
        <Text style={styles.tipsTitle(darkMode)}>Today's Tip</Text>
        <Text style={styles.tipsText(darkMode)}>
          Stay hydrated and aim to drink at least 8 glasses of water daily to keep your energy levels high!
        </Text>
      </View>

      <FitnessCards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: (darkMode) => ({
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    flex: 1,
  }),
  header: (darkMode) => ({
    backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  }),
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: (darkMode) => ({
    color: darkMode ? 'white' : 'black',
    fontWeight: 'bold',
    fontSize: 24,
  }),
  subHeaderText: (darkMode) => ({
    color: darkMode ? 'white' : 'black',
    fontSize: 18,
    marginTop: 10,
  }),
  toggleButton: (darkMode) => ({
    padding: 10,
    borderRadius: 50,
    backgroundColor: darkMode ? '#444' : '#ddd',
    justifyContent: 'center',
  }),
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  shadowCard: (darkMode) => ({
    backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
    width: '28%',
    aspectRatio: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  }),
  cardText: (darkMode) => ({
    fontWeight: 'bold',
    fontSize: 20,
    color: darkMode ? '#fff' : '#333',
  }),
  cardSubText: (darkMode) => ({
    marginTop: 5,
    fontSize: 14,
    color: darkMode ? '#ccc' : '#777',
  }),
  progressSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  progressText: (darkMode) => ({
    fontSize: 18,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#333',
  }),
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  progressPercentage: (darkMode) => ({
    fontSize: 14,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#555',
  }),
  tipsSection: (darkMode) => ({
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: darkMode ? '#2a2a2a' : '#fffbf1',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  }),
  tipsTitle: (darkMode) => ({
    fontSize: 18,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#333',
    marginBottom: 10,
  }),
  tipsText: (darkMode) => ({
    fontSize: 14,
    color: darkMode ? '#ccc' : '#555',
    lineHeight: 20,
  }),
});

export default HomeScreen;