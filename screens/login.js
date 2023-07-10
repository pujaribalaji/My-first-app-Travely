import React from 'react';


import { StyleSheet, View, Text, Button ,SafeAreaView } from 'react-native';

export default function Login({ navigation }) { // Add the navigation prop
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.redBackground}></View>
      <View style={styles.whiteSection}>
        <Text style={styles.textbox}>Discover best places in the world !</Text>
        <Text style={styles.textbox1}>Emotion that can be carried with us all over the world</Text>
      </View>
      <View style={styles.button1}>
        <Button title='Get Started' color='black' onPress={() => navigation.navigate('Home')} ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redBackground: {
    flex: 1,
    backgroundColor: 'red',
  },
  whiteSection: {
    position: 'absolute',
    bottom: 0,
    left: 20, // Adjust the left positioning as needed
    right: 20, // Adjust the right positioning as needed
    height: "50%", 
    borderRadius:22,
    borderBottomEndRadius:0,
    borderBottomStartRadius:0,
    backgroundColor: 'white',
  },
  textbox:{
    textAlign:'center',
    padding:30,
    fontSize:40,
    fontWeight: 700,
  },
  textbox1:{
    textAlign:'center',
    fontSize:16,
    fontWeight:700,
    paddingLeft:35,
    paddingRight:35,
    textAlign:'justify'
  },
  button1:{
    position: 'absolute',
    bottom: 20, // Adjust the vertical positioning as needed
    alignSelf: 'center',
    width: 250, // Adjust the width of the button container as needed
    padding: 40, // Adjust the padding as needed
  },
});
