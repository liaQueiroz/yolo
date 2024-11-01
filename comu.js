import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Comunidade() {
  const navigation = useNavigation();

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Comunidade</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Em breve</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontFamily: 'Roboto',
  },
  botao: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  divisor: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
  },
  textoSecundario: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  }
});

