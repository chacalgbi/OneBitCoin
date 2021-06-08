import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CurrentPrice(){
    return(
        <View style={estilo.headerPrice}>
            <Text style={estilo.currentPrice}>$ 54423.3</Text>
            <Text style={estilo.textPrice}>Última Cotação</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    headerPrice: {
      width:"100%",
      height:"auto",
      alignItems:"center",
    },
    currentPrice: {
        color:"#f50d41",
        fontSize:32,
        fontWeight:"bold",
        paddingTop:20,
    },
    textPrice: {
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold",
    },
  });