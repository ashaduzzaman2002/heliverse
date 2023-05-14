import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Background from '../components/Background';

const { width, height } = Dimensions.get('window');

const FirstScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
        navigation.navigate('SecondScreen')
      }, 3000);
  
      return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView>
      <Background />
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.castingImg}
          source={require('../images/castingLogo.png')}
        />
        <Text style={styles.resultText}>The Results R In!</Text>
      </View>
      <StatusBar  />
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    position: 'absolute',
    alignItems: 'center',
  },

  castingImg: {
    position: 'absolute',
    width: 100,
    bottom: height - height / 2.3,
  },

  resultText: {
    top: height / 3,
    color: '#fce8c1',
    fontSize: 25,
    fontWeight: '500',
  },
});
