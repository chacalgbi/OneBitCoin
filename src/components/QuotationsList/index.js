import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import Lista_Itens from "./QuotationsItens";

export default function Lista_Cotacoes(props){
  const daysQuery = props.filterDay
  return(
    <Fragment>
      <View style={estilo_cotacoes.filtros} >
        <TouchableOpacity style={estilo_cotacoes.botao} onPress={()=>{ daysQuery(7) } } >
          <Text style={estilo_cotacoes.textoBotao}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo_cotacoes.botao} onPress={()=>{ daysQuery(15) } } >
          <Text style={estilo_cotacoes.textoBotao}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo_cotacoes.botao} onPress={()=>{ daysQuery(30) } } >
          <Text style={estilo_cotacoes.textoBotao}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo_cotacoes.botao} onPress={()=>{ daysQuery(90) } } >
          <Text style={estilo_cotacoes.textoBotao}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo_cotacoes.botao} onPress={()=>{ daysQuery(180) } } >
          <Text style={estilo_cotacoes.textoBotao}>6M</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList 
          data= {props.listTransactions}
          renderItem= {({item})=>{
            return <Lista_Itens valor={item.valor} data={item.data} />
          }}
        />
      </ScrollView>
    </Fragment>
  )
}

const estilo_cotacoes = StyleSheet.create({
  filtros:{
    width:"100%",
    flexDirection:"row",
    paddingVertical:15,
    justifyContent:"space-evenly",
  },
  botao:{
    width:50,
    height:30,
    backgroundColor:"#f50d41",
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
  },
  textoBotao:{
    color:"#ffffff",
    fontWeight:"bold",
    fontSize:14,
  },
  });