import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Calendario () {
  const navigation = useNavigation();

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Calendario</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Calendario')} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Em breve</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e0d3',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  botao: {
    padding: 10,
    backgroundColor: '#FF5A5F',
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
});

