import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import UserProfile from './screens/UserProfile'; // ✅ Import UserProfile here

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Register" 
          component={RegistrationScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Workout" 
          component={WorkoutScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Fit" 
          component={FitScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Rest" 
          component={RestScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="UserProfile" 
          component={UserProfile} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
