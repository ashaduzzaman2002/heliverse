import {
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import Background from '../components/Background';
  
  const { width, height } = Dimensions.get('window');

const ThirdScreen = ({ navigation }) => {
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 40000) {
            clearInterval(interval);
            return prevCount;
          }
          return prevCount + 1000;
        });
      }, 100);
  }, []);


  return (
    <SafeAreaView>
      <Background />
      <View style={styles.container}>
        <View></View>

        <Text style={styles.resultText}>4 Friends Gave U Some Love!</Text>
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
            {count}
          </Text>
        </ImageBackground>

        <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')} style={styles.arrow}>
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

const styles = {
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
        top: height / 4.5,
        color: '#fce8c1',
        fontSize: 30,
        fontWeight: '500',
        width: width - 60,
        textAlign: 'center'
      },
    
      arrow: {
        position: 'absolute',
        bottom: height / 5,
        right: 35,
      },
    
      arrowImg: {
        width: 45,
      },
};

export default ThirdScreen;


