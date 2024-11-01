import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Kit() {
  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalhoContainer}>
        <View style={estilos.cabecalho}>
          <View style={estilos.meioCirculo}>
            <Image source={require('../../assets/pulmão.png')} style={estilos.pulmao} />
          </View>
        </View>
      </View>

      <View style={estilos.content}>
      <Image
       source={require('../../assets/pessoa.png')}
       style={[estilos.silhueta]}
      />

        <View style={estilos.exercicioContainer}>
          <TouchableOpacity style={estilos.iconeBotao}>
            <Image source={require('../../assets/mar.png')} style={estilos.iconeExercicio} />
          </TouchableOpacity>
          <TouchableOpacity style={estilos.iconeBotao}>
            <Image source={require('../../assets/nuvem.png')} style={estilos.iconeExercicio} />
          </TouchableOpacity>
          <TouchableOpacity style={estilos.iconeBotao}>
            <Image source={require('../../assets/play.png')} style={estilos.iconeExercicio} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={estilos.botaoAterramento}>
        <Text style={estilos.textoBotao}>Exercícios de Aterramento</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E3D3',
    alignItems: 'center',
  },
  cabecalhoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20, // Diminuído
  },
  cabecalho: {
    width: '100%',
    height: 110,
    backgroundColor: '#6094CC',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  meioCirculo: {
    width: 160,
    height: 160,
    backgroundColor: '#6094CC',
    borderRadius: 80,
    position: 'absolute',
    bottom: -80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulmao: {
    width: 200,
    height: 100,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  silhueta: {
    marginRight: 8,
    flexShrink: 1,
    marginBottom: 5,
    width: 130,
    height: 500,
    marginTop: 70
  },
  exercicioContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    marginLeft: 40,
    height: 300, 
    marginTop: 80,
  },
  iconeBotao: {
    marginVertical: 5,
    alignItems: 'center',
  },
  iconeExercicio: {
    width: 70,
    height: 140,
    borderRadius: 50,
  },
  botaoAterramento: {
    backgroundColor: '#6094CC',
    width: width * 0.8,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
