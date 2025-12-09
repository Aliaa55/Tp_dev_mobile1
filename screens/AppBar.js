// screens/AppBar.js - COPIE CE CODE EXACTEMENT
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>Mon Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: '#007AFF', // Couleur bleue
    justifyContent: 'center',   // Centre verticalement
    alignItems: 'center',       // Centre horizontalement
    elevation: 4,               // Ombre sur Android
    shadowColor: '#000',        // Ombre sur iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    color: '#fff',              // Texte blanc
    fontSize: 18,
    fontWeight: 'bold',
  },
});