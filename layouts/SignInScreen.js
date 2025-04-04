import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
// import { createClient } from '@supabase/supabase-js';

// SupaBaseClient
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lueckcjjjsjwiesapqhs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1ZWNrY2pqanNqd2llc2FwcWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NTIzNzIsImV4cCI6MjA1OTAyODM3Mn0.y6i8VwWytF-eGuNvWvbTDXX3R5A3W5AxYygZnjXycJg'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error', 'No se pudo registrar el usuario.');
      console.error(error.message);
      return;
    }

    Alert.alert('Éxito', 'Usuario registrado correctamente.');
    console.log('Usuario registrado:', user);
    navigation.goBack(); // Vuelve a la pantalla de inicio de sesión
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Tus estilos aquí
});