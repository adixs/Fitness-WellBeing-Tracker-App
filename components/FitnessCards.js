import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {fitness.map((item, id) => (
        <TouchableOpacity
          key={id}
          style={styles.card}
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              exercises: item.exercises,
              id: item.id,
            })
          }
        >
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.name}</Text>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={30}
            color="#dfbe04"
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  cardTitle: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 20,
    top: 20,
  },
  icon: {
    position: "absolute",
    bottom: 15,
    left: 15,
  },
});

export default FitnessCards;