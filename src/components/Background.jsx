import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const Background = () => {
  const route = useRoute();
  const currentScreenName = route.name;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={{ width, height: height - height / 9 }}
        source={require('../images/award_bg.png')}
      />
      <Image
        style={{ width, height: height / 9 }}
        source={require('../images/awardPlatform.png')}
      />
      <Image
        resizeMode="contain"
        style={[
          styles.girl,
          {
            height:
              currentScreenName === 'FirstScreen' ? height / 2.3 : height / 2.6,
          },
        ]}
        source={require('../images/girlClap.png')}
      />
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    height: height,
    position: 'relative',
    alignItems: 'center',
  },

  girl: {
    position: 'absolute',
    bottom: 50,
    width: width,
  },
});
