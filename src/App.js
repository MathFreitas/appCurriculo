import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpeg';
import Card from './components/Card';

const App = () => {

    function handleRedeSocial(rede_social) {
        switch (rede_social) {
            case 'linkedin':
                Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/matheus-freitass/');
                break
            case 'github':
                Alert.alert('Meu Github', 'https://github.com/MathFreitas');
                break
            case 'facebook':
                Alert.alert('Meu Facebook', 'https://www.linkedin.com/in/matheus-freitass/');
                break
        }
    }

    return (
        <>
            <View style={style.page}>
                <View style={style.container_cabecalho} >
                    <Image source={foto} style={style.foto} />
                    <Text style={style.nome}>MATHEUS FREITAS</Text>
                    <Text style={style.funcao}>Desenvolvedor Front-end</Text>
                    <View style={style.redes_sociais}>
                        <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                            <Icon name="github" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                            <Icon name="facebook" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                            <Icon name="linkedin" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Card titulo="Formação Academica">
                    <Text style={style.card_content_text}>Fatec</Text>
                    <Text style={style.card_content_text}>Etec</Text>
                    <Text style={style.card_content_text}>Senai</Text>
                </ Card>
                <Card titulo="Experiencia Profissional">
                    <Text style={style.card_content_text}>Experiencia 1</Text>
                    <Text style={style.card_content_text}>Experiencia 2</Text>
                    <Text style={style.card_content_text}>Experiencia 3</Text>
                </ Card>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    page: {
        backgroundColor: '#E7E7E7',
        flex: 1,
    },
    container_cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    funcao: {
        color: '#939393',
        marginBottom: 10
    },
    redes_sociais: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20
    },
    card_content_text: {
        color: '#939393',
        marginBottom: 10
    }
})

export default App;