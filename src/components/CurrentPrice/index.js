import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CurrentPrice(props){
    return(
        <View style={estilo.headerPrice}>
            <Text style={estilo.currentPrice}>$ {props.ultimo}</Text>
            <Text style={estilo.textPrice}>Última Cotação</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    headerPrice: {
      width:"100%",
      height:"auto",
      alignItems:"center",
      marginBottom:10,
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