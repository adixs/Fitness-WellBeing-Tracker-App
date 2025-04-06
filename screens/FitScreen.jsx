import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useContext } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { ProgressBar } from 'react-native-paper';

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const exercise = route.params.exercises;
  const current = exercise[index];
  const { completed, setCompleted, calories, setCalories, minutes, setMinutes, workout, setWorkout } = useContext(FitnessItems);

  const progress = (index + 1) / exercise.length;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: darkMode ? "#121212" : "#f5f5f5" }]}>
      {}
      <View style={[styles.header, { backgroundColor: darkMode ? "#1f1f1f" : "#fff" }]}>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          name="arrow-back-outline"
          size={24}
          color={darkMode ? "#000" : "black"}
        />
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
          thumbColor={darkMode ? '#4caf50' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      

      { }
      <Image style={styles.image} source={{ uri: current?.image }} />

      {}
      <Text style={[styles.title, { color: darkMode ? "#f5f5f5" : "#333" }]}>
        {current?.name} <Octicons name="question" size={22} color={darkMode ? "#f5f5f5" : "#6d6868"} />
      </Text>
      <Text style={[styles.sets, { color: darkMode ? "#4caf50" : "#198f51" }]}>x{current?.sets}</Text>

      {}
      <View style={styles.progressSection}>
        <Text style={[styles.progressText, { color: darkMode ? "#f5f5f5" : "#666" }]}>
          Exercise {index + 1} of {exercise.length}
        </Text>
        <ProgressBar progress={progress} color="#4caf50" style={styles.progressBar} />
        <Text style={[styles.progressPercentage, { color: darkMode ? "#f5f5f5" : "#555" }]}>
          {Math.round(progress * 100)}% Completed
        </Text>
      </View>

      {}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(index + 1 >= exercise.length ? 'Home' : 'Rest');
          setCompleted([...completed, current?.name]);
          setWorkout(workout + 1);
          setMinutes(minutes + 2.5);
          setCalories(calories + 6.3);
          setTimeout(() => setIndex(index + 1), 2000);
        }}
        style={[styles.doneButton, { backgroundColor: "#198f51" }]}>
        <Text style={styles.doneText}>
          <Ionicons name="checkmark-circle" size={24} color="white" /> DONE
        </Text>
      </TouchableOpacity>

      {}
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setIndex(index - 1);
          }}
          style={[styles.navButton, index === 0 && styles.disabledButton]}>
          <Text style={[styles.navButtonText, { color: darkMode ? "#000" : "#000000" }]}>
            <Ionicons name="play-skip-back" size={22} color={index === 0 ? "#000" : "#000000"} /> PREV
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Rest");
            setIndex(index + 1);
          }}
          style={styles.navButton}>
          <Text style={[styles.navButtonText, { color: darkMode ? "#000" : "#000000" }]}>
            <Ionicons name="play-skip-forward" size={22} color={darkMode ? "#000" : "#000"} /> SKIP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  backButton: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  motivationText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
  },
  title: {
    marginTop: 30,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sets: {
    marginTop: 10,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  progressPercentage: {
    fontSize: 14,
  },
  doneButton: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  navButton: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "45%",
    backgroundColor: "#f5f5f5",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  disabledButton: {
    backgroundColor: "#f5f5f5",
    borderColor: "#e0e0e0",
  },
  navButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default FitScreen;
