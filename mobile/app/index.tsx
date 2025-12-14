import '../global.css';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const LandingPage = () => {
  return (
    <View>
      <Text>LandingPage</Text>
      <Text>Welcome to the Jesus App!</Text>
    </View>
  );
};

export default LandingPage;
