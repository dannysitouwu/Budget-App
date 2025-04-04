//tabs

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function ValueInputScreen({ navigation }) {
  const [value, setValue] = useState('');

  const handlePress = (num) => {
    if (num === 'back') {
      setValue(value.slice(0, -1)); // Elimina el último carácter
    } else {
      setValue((prev) => (prev + num).replace(/^0+/, '')); // Evita ceros iniciales
    }
  };

  const handleConfirm = () => {
    if (!value) {
      Alert.alert('Error', 'Por favor, ingresa un valor.');
      return;
    }
    Alert.alert('Valor confirmado', `Has ingresado: $${value}`);
    navigation.goBack(); // Regresa a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>enter value:</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>${value || '0.00'}</Text>
      </View>
      <View style={styles.keyboard}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'back'].map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.key}
            onPress={() => handlePress(key)}
          >
            <Text style={styles.keyText}>
              {key === 'back' ? '↩' : key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5A4B81',
  },
  inputContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#D6C8F0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#5A4B81',
  },
  inputText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5A4B81',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
  },
  key: {
    width: '30%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#F3E8FD',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5A4B81',
  },
  keyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5A4B81',
  },
  confirmButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#B8A4E3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});