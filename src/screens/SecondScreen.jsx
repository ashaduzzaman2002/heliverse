import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Background from '../components/Background';

const { width, height } = Dimensions.get('window');

const SecondScreen = ({ navigation }) => {
  const profileAnimation = new Animated.Value(0);
  const animateProfile = () => {
    Animated.sequence([
      Animated.timing(profileAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(profileAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    animateProfile();
    const timeout = setTimeout(() => {
      navigation.navigate('ThirdScreen')
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView>
      <Background />
      <View style={styles.container}>
        <View style={styles.profileCard}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: profileAnimation.interpolate({
                    inputRange: [0, 1, 1],
                    outputRange: [0, -width, -width / 1.5],
                  }),
                },
              ],
            }}
          >
            <View>
              <View style={styles.profilePic}>
                <Image
                  resizeMode="cover"
                  style={{ width: '100%', height: '100%' }}
                  source={require('../images/avtar2.png')}
                />
              </View>
              <View style={styles.profileTxtBox}>
                <Text
                  style={{ fontSize: 48, color: '#fce8c1', fontWeight: '300' }}
                >
                  D-Lister
                </Text>
                <Text style={{ color: '#fff', fontSize: 16 }}>Solly</Text>
              </View>
            </View>
          </Animated.View>
        </View>

        <Text style={styles.resultText}>Gave U Some Love!</Text>
        <ImageBackground
          resizeMode="contain"
          style={styles.love}
          source={require('../images/main-heart.png')}
        >
          <Text
            style={{
              color: '#ffe600e8',
              fontSize: 35,
              fontWeight: '600',
              marginBottom: 15,
            }}
          >
            15000
          </Text>
        </ImageBackground>

        <TouchableOpacity onPress={animateProfile} style={styles.arrow}>
          <Image
            resizeMode="contain"
            style={styles.arrowImg}
            source={require('../images/arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    position: 'absolute',
    alignItems: 'center',
  },

  love: {
    position: 'absolute',
    width: 180,
    height: 120,
    top: height / 2.7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultText: {
    top: height / 3.4,
    color: '#fce8c1',
    fontSize: 28,
    fontWeight: '500',
  },

  arrow: {
    position: 'absolute',
    bottom: height / 5,
    right: 35,
  },

  arrowImg: {
    width: 45,
  },

  profileCard: {
    position: 'absolute',
    top: height / 10,
    width: width,
  },

  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ffe600e8',
    left: width / 9,
  },

  profileTxtBox: {
    position: 'absolute',
    top: 0,
    right: width / 12,
    alignItems: 'center',
  },
});
