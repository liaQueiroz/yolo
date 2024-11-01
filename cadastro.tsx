import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [interesses, setInteresses] = useState('');
  const [pais, setPais] = useState('');
  const [termos, setTermos] = useState(false);

  const handleCadastro = () => {
    const usuario = {
      nome,
      email,
      senha,
      data_nascimento: dataNascimento,
      genero,
      interesses,
      pais,
      termos,
    };
    Alert.alert('Cadastro realizado!', 'Você se cadastrou com sucesso.');
  };

  return (
    <View>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} />
      <TextInput placeholder="Data de Nascimento" onChangeText={setDataNascimento} />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default Cadastro;