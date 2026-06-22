import { View, Text, StyleSheet } from 'react-native';

export default function Aula02_Flexbox() {
    return (
        <View style={Estilos.conteudo}>
            <Text style={Estilos.caixa}>1</Text>
            <Text style={Estilos.caixa}>2</Text>
            <Text style={Estilos.caixa}>3</Text>
        </View>
    );
}

const Estilos = StyleSheet.create({
    conteudo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 100
        },
    caixa: {
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        lineHeight: 50,
        }
});