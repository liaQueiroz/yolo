import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Escreva() {
  const navigation = useNavigation();
  const route = useRoute();
  const { emojiSelecionado } = route.params || {}; 
  const [corFundo, setCorFundo] = useState('#e1e0d3');
  const [mostrarSeletorData, setMostrarSeletorData] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState('DATA');
  const [modalVisivel, setModalVisivel] = useState(false);

  const cores = [
    { cor: '#D8BFD8' }, // Roxo 
    { cor: '#ADD8E6' }, // Azul 
    { cor: '#FFFACD' }, // Amarelo 
    { cor: '#98FB98' }, // Verde 
    { cor: '#FFDAB9' }, // Laranja 
    { cor: '#D3D3D3' }, // Cinza 
    { cor: '#FFB6C1' }, // Rosa 
    { cor: '#E9967A' }, // Marrom 

  ];

  const aoMudarData = (event, selecionado) => {
    const dataAtual = selecionado || dataSelecionada;
    setMostrarSeletorData(false);
    setDataSelecionada(dataAtual.toLocaleDateString('pt-BR'));
  };

  const mudarCor = (cor) => {
    setCorFundo(cor);
    setModalVisivel(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <View style={styles.cabecalhoLinha}>
        <TouchableOpacity onPress={() => setMostrarSeletorData(true)} style={styles.seletorData}>
          <Text style={styles.textoData}>{dataSelecionada}</Text>
        </TouchableOpacity>
        {emojiSelecionado && (
          <Text style={styles.emoji}>{emojiSelecionado}</Text>
        )}
        <TouchableOpacity style={styles.botaoTrocaCor} onPress={() => setModalVisivel(true)}>
          <Text style={styles.textoBotaoTrocaCor}>🎨</Text>
        </TouchableOpacity>
      </View>
      {mostrarSeletorData && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={aoMudarData}
        />
      )}

      <TextInput
        style={[styles.caixaTexto, { backgroundColor: corFundo }]}
        placeholder="Escreva seu texto aqui..."
        placeholderTextColor="#555"
        multiline
      />

      <TouchableOpacity onPress={() => {}} style={styles.botaoSalvar}>
        <Text style={styles.textoBotaoSalvar}>SALVAR</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisivel}
        animationType="slide"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalConteudo}>
            <Text style={styles.tituloModal}>Selecione uma cor:</Text>
            <FlatList
              data={cores}
              keyExtractor={(item) => item.cor}
              numColumns={4}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.opcaoCor, { backgroundColor: item.cor }]}
                  onPress={() => mudarCor(item.cor)}
                />
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cabecalhoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  seletorData: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    marginTop: 20, 
},
  textoData: {
    fontSize: 16,
    color: '#000',
  },
  emoji: {
    fontSize: 30,
    marginTop: 20, 

  },
  caixaTexto: {
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  botaoSalvar: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#6094CC',
    borderRadius: 5,
    padding: 10,
  },
  textoBotaoSalvar: {
    color: '#fff',
    fontSize: 16,
  },
  botaoTrocaCor: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF5A5F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 

  },
  textoBotaoTrocaCor: {
    color: '#fff',
    fontSize: 20,
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalConteudo: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    
  },
  tituloModal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  opcaoCor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
});