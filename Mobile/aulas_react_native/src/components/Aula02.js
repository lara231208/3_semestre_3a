import { useState } from 'react'
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import Logo from '../../assets/icon.png'
import { LinearGradient } from 'expo-linear-gradient';
import Aula02_Flexbox from './Aula02_Flexbox';
const Aula02 = () => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text>-------------------------------------------</Text>
            <Text>Aula 02 - Componentes Básicos</Text>
            <Text>Conecendo os principais componentes do React Native</Text>
           {/*Inserindo imagem da internet */}
            <Image source={{uri: 'https://picsum.photos/300/200'}} style={{ width: 300, height: 200 }} />

            {/*Inserindo imagem diretamente do caminho do arquivo */}
            <Image source={require('../../assets/icon.png')} style={{ width: 50, height: 50 }} />

            {/*Inserindo imagem referenciando como componente */}
            <Image source={Logo} style={{ width: 50, height: 50 }} />

            <TextInput
                placeholder='Digite seu nome' style={{ borderWidth: 1, padding: 10, margin: 10 }} onChangeText={setNome} />
            <Text>Seu nome é: {nome}</Text>

            {/* Botao com poucas possibilidades de estilização */}
            <Button title='Clique aqui' onPress={() => console.log(nome)} />

                {/* Botão com controle total de estilização */}
                <TouchableOpacity
    onPress={() => console.log(nome)}
    style={Estilos.botao}
>
    <Image source={Logo} style={{ width: 50, height: 50}} />

    <Text style={Estilos.botaoTexto}> Botão TouchableOpacity</Text>
</TouchableOpacity>

<LinearGradient
    colors={[ 'blue', 'red', 'yellow']}
    style={{ height: 50 }}
>
</LinearGradient>
<Aula02_Flexbox />
        </View> 
    )
}

//utilizamos o styleSheet para que ele converta a estilização para o padrão dos componentes nativos
const Estilos = StyleSheet.create({
    botao: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#fb00d1'
    },
    botaoTexto: {
         color: '#fff', 
            fontSize: 16, 
            fontWeight: 'bold' }
});

export default Aula02