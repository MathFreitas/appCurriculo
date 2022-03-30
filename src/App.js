import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const App = () => {
    return (
        <>
            <View style={style.page}>
                <View style={style.container_cabecalho} >
                    <Image source={foto} style={style.foto} />
                    <Text>MATHEUS FREITAS</Text>
                    <Text>Desenvolvedor Front-end</Text>
                    <View>
                        <Text>Github</Text>
                        <Text>Facebook</Text>
                        <Text>Linkedin</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    page:{
        backgroundColor: '#E7E7E7',
        flex: 1
    },
    container_cabecalho:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    foto:{
        width: 250,
        height: 250,
        borderRadius: 125
    }
})

export default App;