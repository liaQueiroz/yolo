import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e0d3',
    alignItems: 'center', 
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 60
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  letreiro: {
    width: 250,
    height: 70,
    marginBottom: 30
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
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  botaoEntrar: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  botaoCadastro: {
    marginTop: 10,
    padding: 10
  },
  textoCadastro: {
    color: '#4A90E2',
    fontSize: 16,
    textDecorationLine: 'underline'
  }
});
