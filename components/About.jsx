import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default About;