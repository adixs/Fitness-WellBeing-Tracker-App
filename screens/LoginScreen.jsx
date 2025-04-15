import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularButton from '../components/Buttons/RegularButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitData = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter all fields');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          navigation.navigate('Home', { userId: user.uid, userData });
        } else {
          navigation.navigate('Home', { userId: user.uid });
        }
      } catch (firestoreError) {
        console.error('Firestore error:', firestoreError.message);
        Alert.alert('Error', 'Could not fetch user profile.');
      }

    } catch (authError) {
      console.error('Login error:', authError.message);
      Alert.alert('Login Failed', authError.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Login to your account</Text>

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
          placeholder="Enter your password"
          isPassword={true}
          darkMode={true}
        />

        <RegularButton onPress={submitData} darkMode={true} style={styles.button}>
          Login
        </RegularButton>

        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
            Register here
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

export default LoginScreen;
