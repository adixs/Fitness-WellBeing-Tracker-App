import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const FitnessItems = createContext();

const FitnessContextProvider = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log("User logged in:", currentUser.email);
      } else {
        console.log("User logged out");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
        user,
        setUser,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

export { FitnessContextProvider, FitnessItems };
