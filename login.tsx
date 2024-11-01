import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === 'queirozmcecilia@gmail.com' && senha === '123456') {
      Alert.alert('Login bem-sucedido!', `Bem-vindo, usuário teste!`);
      navigation.navigate('Home' as never);
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <View style={estilos.container}>
      <Image 
        source={require('../assets/logo.png')} 
        style={estilos.logo} 
        resizeMode="contain" 
      />
      <Image 
        source={require('../assets/letreiro.jpg')} 
        style={estilos.letreiro} 
        resizeMode="contain" 
      />
      <Text style={estilos.titulo}>Faça login em sua conta</Text>
      <TextInput 
        placeholder="Email" 
        onChangeText={setEmail} 
        style={estilos.input} 
      />
      <TextInput 
        placeholder="Senha" 
        secureTextEntry 
        onChangeText={setSenha} 
        style={estilos.input} 
      />
      <Button title="ENTRAR" onPress={handleLogin} color="#4A90E2" />
      <Text style={estilos.link}>Esqueceu sua senha?</Text>
      <Text style={estilos.link}>Ainda não tem conta? Faça seu cadastro!</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e0d3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 180,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  link: {
    color: '#4A90E2',
    marginVertical: 5,
  },
  letreiro: {
    width: 200,
    height: 180,
    marginTop: 10,
  },
});

export default Login;
