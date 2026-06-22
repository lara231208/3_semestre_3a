// aqui é onde importaremos todas as bibliotecas e componentes igual ao react
import { StatusBar } from 'expo-status-bar';
// todos os componentes do react native precisão ser importados
import { StyleSheet, Text, View } from 'react-native';

export default function Aula01() {
  return (
    // o componente view é como se fosse a DIV, MAIN, HEADER, SECTION
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello World!</Text>
      <Text>Esse é o meu primeiro App!</Text>
      {/* o componente text é como se fosse o P, H1, H2, H3, SPAN, LABEL */}
      <StatusBar style="auto" />

      <View style={{ width: '95%' }}>
        <Text style={styles.esquerda}>Texto 1</Text>
        <Text style={styles.direita}>Texto 2</Text>
        <Text style={styles.centro}>Texto 3</Text>
      </View>
    </View>


  );
}

// para fazermos uma estilização, utilizamos um objeto e o componente StyleSheet
// esse objeto é igual fizemos em React
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  esquerda: {
    color: 'blue',
    alignSelf: 'flex-start',
  },
  direita: {
    color: 'red',
    alignSelf: 'flex-end',
  },
  centro: {
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
