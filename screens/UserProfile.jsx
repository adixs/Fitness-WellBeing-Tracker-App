import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const UserProfile = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main Street, City, Country',
    profilePicture: null,
  });
  const [editing, setEditing] = useState(false);

  // Handle updating profile information
  const handleUpdate = () => {
    Alert.alert('Profile Updated', 'Your profile has been successfully updated.');
    setEditing(false);
  };

  // Handle deleting profile
  const handleDelete = () => {
    Alert.alert(
      'Delete Profile',
      'Are you sure you want to delete your profile?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => setUser(null), style: 'destructive' },
      ]
    );
  };

  // Handle logging out
  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
    // Add your navigation logic here (e.g., navigate to Login screen)
  };

  // Handle picking a profile picture
  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setUser({ ...user, profilePicture: result.assets[0].uri });
    }
  };

  // Handle resetting the profile data to default values
  const handleReset = () => {
    setUser({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main Street, City, Country',
      profilePicture: null,
    });
    Alert.alert('Profile Reset', 'Your profile has been reset to default settings.');
  };

  if (!user) {
    return (
      <View style={styles.container(darkMode)}>
        <Text style={styles.deletedText(darkMode)}>Profile Deleted</Text>
      </View>
    );
  }

  return (
    <View style={styles.container(darkMode)}>
      {/* Header */}
      <View style={styles.header(darkMode)}>
        <Text style={styles.headerText(darkMode)}>User Profile</Text>
        <TouchableOpacity onPress={() => setDarkMode(!darkMode)} style={styles.toggleButton(darkMode)}>
          {darkMode ? <Ionicons name="sunny" size={22} color="white" /> : <Ionicons name="moon" size={22} color="black" />}
        </TouchableOpacity>
      </View>

      {/* Profile Picture */}
      <TouchableOpacity onPress={handlePickImage} style={styles.profilePictureContainer}>
        {user.profilePicture ? (
          <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
        ) : (
          <Ionicons name="person-circle-outline" size={80} color={darkMode ? 'white' : 'gray'} />
        )}
      </TouchableOpacity>
      <Text style={styles.uploadText}>Tap to change profile picture</Text>

      {/* Profile Details */}
      <View style={styles.profileSection}>
        <Text style={styles.label(darkMode)}>Name</Text>
        <TextInput style={styles.input(darkMode)} value={user.name} onChangeText={(text) => setUser({ ...user, name: text })} editable={editing} />

        <Text style={styles.label(darkMode)}>Email</Text>
        <TextInput style={styles.input(darkMode)} value={user.email} keyboardType="email-address" onChangeText={(text) => setUser({ ...user, email: text })} editable={editing} />

        <Text style={styles.label(darkMode)}>Phone</Text>
        <TextInput style={styles.input(darkMode)} value={user.phone} keyboardType="phone-pad" onChangeText={(text) => setUser({ ...user, phone: text })} editable={editing} />

        <Text style={styles.label(darkMode)}>Address</Text>
        <TextInput style={styles.input(darkMode)} value={user.address} onChangeText={(text) => setUser({ ...user, address: text })} editable={editing} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        {editing ? (
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: (darkMode) => ({
    flex: 1,
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    padding: 20,
  }),
  header: (darkMode) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  }),
  headerText: (darkMode) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: darkMode ? 'white' : 'black',
  }),
  toggleButton: (darkMode) => ({
    padding: 10,
    borderRadius: 50,
    backgroundColor: darkMode ? '#444' : '#ddd',
  }),
  profilePictureContainer: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  uploadText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  profileSection: {
    marginBottom: 20,
  },
  label: (darkMode) => ({
    fontSize: 16,
    fontWeight: 'bold',
    color: darkMode ? '#bbb' : '#444',
    marginBottom: 5,
  }),
  input: (darkMode) => ({
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: darkMode ? '#444' : '#ccc',
  }),
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#795548',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserProfile;
