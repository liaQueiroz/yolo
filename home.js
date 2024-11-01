import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faComments, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [nomeUsuario, setNomeUsuario] = useState('Lia');
  const [humor, setHumor] = useState(3);
  const [dias, setDias] = useState([]);
  const navigation = useNavigation();

  const emojis = ['😢', '🙁', '😐', '🙂', '😍'];

  useEffect(() => {
    const hoje = new Date();
    const diasAnteriores = Array.from({ length: 5 }, (_, i) => {
      const diaAnterior = new Date(hoje);
      diaAnterior.setDate(hoje.getDate() - i);
      return diaAnterior.getDate();
    });
    setDias(diasAnteriores.reverse()); 
  }, []);

  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Image source={require('../../assets/logo.png')} style={estilos.avatar} />
        <View style={estilos.boasVindas}>
          <Text style={estilos.tituloBoasVindas}>Bem-vinda, {nomeUsuario}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={estilos.textoHumor}>Escreva sobre o seu dia!</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={estilos.containerHumor}>
        <View style={estilos.containerBotoesNumeros}>
          {dias.map((num) => (
            <TouchableOpacity
              key={num}
              style={estilos.botaoNumero}
              onPress={() => navigation.navigate('Calendario', { dia: num })}>
              <Text style={estilos.textoNumero}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={estilos.sliderContainer}>
          <Slider
            style={estilos.slider}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={humor}
            onValueChange={(value) => setHumor(value)}
            minimumTrackTintColor="#FF5A5F"
            maximumTrackTintColor="#FFB5A7"
            thumbTintColor="#FF5A5F"
          />
          <Text style={estilos.emoji}>{emojis[humor - 1]}</Text>
        </View>
      </View>

      <Image source={require('../../assets/frase.png')} style={estilos.imagemFrase} />

      <View style={estilos.containerBotoes}>
        <TouchableOpacity onPress={() => navigation.navigate('Kit')} style={estilos.botaoKit}>
          <Image source={require('../../assets/kit.png')} style={estilos.imagemBotao} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Escreva')} style={estilos.botaoDiario}>
          <Image source={require('../../assets/diario.png')} style={estilos.imagemBotao} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e0d3',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 110,
    height: 120,
    borderRadius: 60,
    marginRight: 30,
    marginTop: 23,
  },
  boasVindas: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 1,
    marginTop: 23,
  },
  tituloBoasVindas: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  textoHumor: {
    fontSize: 16,
    color: '#6094CC',
    textDecorationLine: 'underline',
  },
  containerHumor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 0,
  },
  containerBotoesNumeros: {
    flexDirection: 'row',
    marginTop: -33,
  },
  botaoNumero: {
    backgroundColor: '#E0E0E0',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 15,
  },
  textoNumero: {
    fontSize: 12,
    color: '#333',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  slider: {
    width: 120,
    height: 40,
    marginTop: -23,
  },
  emoji: {
    fontSize: 30,
    marginLeft: 10,
    color: '#FF5A5F',
    marginTop: -23,
  },
  imagemFrase: {
    width: '100%',
    height: 180,
    marginVertical: 10,
    borderRadius: 30,
    marginTop: 25,
    marginBottom: -10,
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoKit: {
    flex: 1,
    marginRight: 10,
    height: 300,
    marginTop: 30,
  },
  botaoDiario: {
    flex: 1,
    marginLeft: 10,
    height: 300,
    marginTop: 30,
    
  },
  imagemBotao: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
    marginTop: 15,

  },
  containerBotoesIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
  },
});
