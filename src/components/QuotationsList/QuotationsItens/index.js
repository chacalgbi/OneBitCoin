import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Lista_Itens(props){
    return(
        <View style={itens.main}>
            <View style={itens.esquerda}>
                <View style={itens.boxImgData}>
                    <Image style={itens.img} source={require("../../../../img/bit.png")} />
                    <Text style={itens.data}>{props.data}</Text>
                </View>
            </View>
            <View style={itens.direita}>
                <Text style={itens.preco}>${props.valor}</Text>
            </View>
        </View>
    )
  }

const itens = StyleSheet.create({
    main:{
        width:"90%",
        height:"auto",
        backgroundColor:"#363636",
        marginLeft:"3%",
        marginBottom:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
    },
    esquerda:{
        width:"36%",
        height:"100%",
        alignItems:"flex-start",
    },
    direita:{
        width:"60%",
        alignItems:"flex-end",
    },
    data:{
        fontSize:14,
        paddingLeft:10,
        color:"#ffffff",
        fontWeight:"bold",
    },
    preco:{
        fontSize:14,
        color:"#ffffff",
        fontWeight:"bold",
    },
    img:{
        width:30,
        height:30,
        marginLeft:2,
    },
    boxImgData:{
        flexDirection:"row",
        alignItems:"center",
    },
  });