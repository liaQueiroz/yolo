import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();
  const [usuario] = useState({
    nome: 'Lia Queiroz',
    email: 'lia.queiroz@email.com',
    dataNascimento: '15/03/1995',
    genero: 'Feminino',
    pais: 'Brasil',
    interesses: ['Meditação', 'Ansiedade', 'Autocuidado']
  });

  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.header}>
        <Image 
          source={require('../../assets/logo.png')}
          style={estilos.avatar}
        />
        <Text style={estilos.nome}>{usuario.nome}</Text>
      </View>

      <View style={estilos.infoContainer}>
        <View style={estilos.infoItem}>
          <Text style={estilos.label}>Email:</Text>
          <Text style={estilos.info}>{usuario.email}</Text>
        </View>

        <View style={estilos.infoItem}>
          <Text style={estilos.label}>Data de Nascimento:</Text>
          <Text style={estilos.info}>{usuario.dataNascimento}</Text>
        </View>

        <View style={estilos.infoItem}>
          <Text style={estilos.label}>Gênero:</Text>
          <Text style={estilos.info}>{usuario.genero}</Text>
        </View>

        <View style={estilos.infoItem}>
          <Text style={estilos.label}>País:</Text>
          <Text style={estilos.info}>{usuario.pais}</Text>
        </View>

        <View style={estilos.interessesContainer}>
          <Text style={estilos.label}>Interesses:</Text>
          <View style={estilos.interessesTags}>
            {usuario.interesses.map((interesse, index) => (
              <View key={index} style={estilos.tag}>
                <Text style={estilos.tagText}>{interesse}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={estilos.editarButton}
        onPress={() => navigation.navigate('EditarPerfil')}
      >
        <Text style={estilos.editarButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.sairButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={estilos.sairButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e0d3',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444'
  },
  infoContainer: {
    padding: 20
  },
  infoItem: {
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  info: {
    fontSize: 18,
    color: '#444'
  },
  interessesContainer: {
    marginTop: 10
  },
  interessesTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5
  },
  tag: {
    backgroundColor: '#6094CC',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 3
  },
  tagText: {
    color: '#fff',
    fontSize: 14
  },
  editarButton: {
    backgroundColor: '#6094CC',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  editarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  sairButton: {
    backgroundColor: '#FF5A5F',
    margin: 20,
    marginTop: 0,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  sairButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});