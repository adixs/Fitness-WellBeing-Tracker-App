import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { auth, db } from '../config/firebase';  // Firebase config
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth
import { addDoc, collection } from 'firebase/firestore'; // Firestore
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularButton from '../components/Buttons/RegularButton';

const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usersCollection = collection(db, "users");

  const submitData = async () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user details to Firestore (DO NOT add password!)
      await addDoc(usersCollection, {
        uid: user.uid,
        Name: fullName,
        Email: email,
        createdAt: new Date()
      });

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us and explore more</Text>

        <StyledTextInput
          label="Full Name"
          icon="account-circle"
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          darkMode={true}
        />
        <StyledTextInput
          label="Email Address"
          icon="email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          darkMode={true}
        />
        <StyledTextInput
          label="Password"
          icon="lock"
          value={password}
          onChangeText={setPassword}
          placeholder="Create a password"
          isPassword={true}
          darkMode={true}
        />

        <RegularButton onPress={submitData} darkMode={true} style={styles.button}>
          Register
        </RegularButton>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Login here
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
  footerText: {
    color: '#bbb',
    marginTop: 20,
  },
  link: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;
