import React from "react";
import { StyleSheet, View } from "react-native";

const App = () => {
    return (
        <>
            <View style={style.page}>
                <View>
                    <Image source={foto} />
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
    foto: {
        width: 250,
        height: 250
    }
})

export default App;