import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Criesuaconta() {
  const [pagina, setPagina] = useState(1); // navegação entre as páginas
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [pais, setPais] = useState('');
  const interesses = [
    'AUTOCONHECIMENTO', 'MEDITAÇÃO', 'ANSIEDADE', 'DEPRESSÃO',
    'EMOÇÕES', 'AUTOCUIDADO', 'EQUILÍBRIO', 'MOTIVAÇÃO',
    'RELAXAMENTO', 'AUTOESTIMA', 'GRATIDÃO', 'RELACIONAMENTOS'
  ];

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      {pagina === 1 ? (
        <View>
          <View style={estilos.logoContainer}>
            <Image source={require('../../assets/logo.png')} style={estilos.logo} />
            <Image source={require('../../assets/letreiro.jpg')} style={estilos.letra} />

          </View>
          <Text style={estilos.titulo}>Crie sua conta</Text>
          <TextInput
            style={estilos.input}
            placeholder="Apelido"
            value={apelido}
            onChangeText={setApelido}
          />
          <TextInput
            style={estilos.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={estilos.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <TextInput
            style={estilos.input}
            placeholder="Confirme sua senha"
            secureTextEntry
            value={confirmaSenha}
            onChangeText={setConfirmaSenha}
          />
          <TouchableOpacity style={estilos.botaoAvancar} onPress={() => setPagina(2)}>
            <Text style={estilos.textoBotao}>AVANÇAR</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={estilos.label}>Data de nascimento</Text>
          <TextInput
            style={estilos.input}
            placeholder="Data de nascimento"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
          <Text style={estilos.label}>Gênero</Text>
          <TextInput
            style={estilos.input}
            placeholder="Gênero"
            value={genero}
            onChangeText={setGenero}
          />
          <Text style={estilos.label}>Selecione seus interesses</Text>
          <View style={estilos.containerInteresses}>
            {interesses.map((interesse, index) => (
              <TouchableOpacity key={index} style={estilos.botaoInteresse}>
                <Text style={estilos.textoInteresse}>{interesse}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={estilos.label}>País/Região</Text>
          <TextInput
            style={estilos.input}
            placeholder="País/Região"
            value={pais}
            onChangeText={setPais}
          />
          <TouchableOpacity style={estilos.botaoCadastrar} onPress={() => navigation.navigate('Home')}>
            <Text style={estilos.textoBotao}>CADASTRAR!</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e1e0d3',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#a8a8a8',
    borderRadius: 8,
    paddingVertical: 14, 
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 15,
  },  
  botaoAvancar: {
    backgroundColor: '#3d9dd4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoCadastrar: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#007AFF',
    marginVertical: 10,
  },
  containerInteresses: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  botaoInteresse: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 5,
  },
  textoInteresse: {
    color: '#444',
    fontSize: 12,
  },
  letra: {
    marginTop: 10,
  },
});