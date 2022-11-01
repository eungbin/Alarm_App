import React from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> My First React Native!!!!</Text>
      <Button
        title="Button"
        onPress={() => Alert.alert('Title', 'Touched Button')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default Main;