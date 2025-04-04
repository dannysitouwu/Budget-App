import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Begin = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Start'); // Cambia a la pantalla de login después de 3 segundos
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/SplashScreen.png')} style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',  // Hace que la imagen ocupe toda la pantalla
    height: '100%',
    resizeMode: 'cover', // Asegura que la imagen cubra la pantalla completa
  },
});

export default Begin;
