import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useRef } from 'react';


export const Animation101Screen = () => {

  
  const animatedOpacity = useRef( new Animated.Value(0) ).current;
  
  const fadeIn = () => {
    Animated.timing( animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start( () => console.log('Animation ended') );

  }

  const fadeOut = () => {
    Animated.timing( animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start( () => console.log('Animation ended') );

  }


  return (
    <View style={ styles.container }>
      
      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animatedOpacity
        }
      ]}/>

      <Pressable onPress={ fadeIn } style={{ marginTop: 10 }}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={ fadeOut } style={{ marginTop: 10 }}>
        <Text>FadeOut</Text>
      </Pressable>
      
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  }
})