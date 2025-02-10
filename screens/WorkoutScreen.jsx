import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, TouchableOpacity, View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);
  const [darkMode, setDarkMode] = useState(true);

  const progress = (completed.length / route.params.exercises.length) * 100;

  return (
    <View style={styles.container(darkMode)}>
      <View style={styles.header(darkMode)}>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backButton(darkMode)}
          name="arrow-back-outline"
          size={24}
          color={darkMode ? "#fff" : "black"}
        />
        <Text style={styles.headerText(darkMode)}>Workout Details</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
          thumbColor={darkMode ? '#4caf50' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: darkMode ? "#121212" : "white", marginTop: 20 }}
      >
        <Image
          style={styles.image}
          source={{ uri: route.params.image }}
        />

        {route.params.exercises.map((item, index) => (
          <TouchableOpacity
            style={styles.exerciseItem(darkMode)}
            key={index}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={styles.exerciseImage} source={{ uri: item.image }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.exerciseName(darkMode)}>{item.name}</Text>
                <Text style={styles.exerciseSets(darkMode)}>{item.sets}</Text>
              </View>
            </View>
            {completed.includes(item?.name) ? (
              <AntDesign name="checkcircle" size={24} color="#198f51" />
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText(darkMode)}>
          Progress: {progress.toFixed(0)}%
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${progress}%` }]}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.homeButton}
        >
          <Text style={styles.footerButtonText}><Ionicons name="home-outline" size={20} color="white" /> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Fit", { exercises: route.params.exercises });
            setCompleted([]);
          }}
          style={styles.startButton}
        >
          <Text style={styles.footerButtonText}><MaterialCommunityIcons name="whistle" size={24} color="white" /> START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (darkMode) => ({
    flex: 1,
    backgroundColor: darkMode ? "#121212" : "white",
    paddingTop: 40,
  }),
  header: (darkMode) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: darkMode ? "#1f1f1f" : "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: darkMode ? "#333" : "#ddd",
  }),
  headerText: (darkMode) => ({
    fontSize: 20,
    fontWeight: "bold",
    color: darkMode ? "#fff" : "black",
  }),
  backButton: (darkMode) => ({
    padding: 5,
    borderRadius: 8,
    backgroundColor: darkMode ? "#333" : "#fff",
  }),
  image: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  exerciseItem: (darkMode) => ({
    marginVertical: 12,
    marginHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: darkMode ? "#1f1f1f" : "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  }),
  exerciseImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  exerciseName: (darkMode) => ({
    fontSize: 18,
    fontWeight: "bold",
    color: darkMode ? "#fff" : "black",
  }),
  exerciseSets: (darkMode) => ({
    marginTop: 4,
    fontSize: 16,
    color: darkMode ? "gray" : "#555",
  }),
  progressContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  progressText: (darkMode) => ({
    fontSize: 16,
    fontWeight: "bold",
    color: darkMode ? "#fff" : "black",
    marginBottom: 5,
  }),
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#198f51",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: "#198f51",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  startButton: {
    backgroundColor: "#198f51",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  footerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WorkoutScreen;