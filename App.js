import React, {useState, useEffect} from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from "./src/components/CurrentPrice";
import Historico_Grafico from "./src/components/HistoryGraphic";
import Lista_Cotacoes from "./src/components/QuotationsList";
import Lista_Itens from "./src/components/QuotationsList/QuotationsItens";

function addZero(number){
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtdDias){
  const date = new Date();
  const listLastDays = qtdDias;
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`

  date.setDate(date.getDate() - listLastDays);
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListCotacoes = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListCotacoes).map((key) =>{
    return{
      data: key.split("-").reverse().join("/"),
      valor: selectListCotacoes[key]
    };
  });
  let data = queryCoinsList.reverse();

  return data;
}

async function Grafico(url){
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListCotacoesG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListCotacoesG).map((key) =>{ return selectListCotacoesG[key]; });
  let dataG = queryCoinsListG;
  return dataG;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsG, setCoinsG] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDay (number){
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() =>{
    getListCoins(url(days))
    .then((data)=>{
      setCoinsList(data);
    })
    .catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });

    Grafico(url(days))
      .then((dataG)=>{
        setCoinsG(dataG);
      })
      .catch((error)=>{
        console.log("Api call error");
        alert(error.message);
      });

    if(updateData){
      setUpdateData(false);
    }

  },[updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#f50d41" barStyle="light-content" />
      <CurrentPrice ultimo={coinsG[coinsG.length-1]} />
      <Historico_Grafico infoData={coinsG} />
      <Lista_Cotacoes filterDay= {updateDay} listTransactions= {coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 5 : 0
  },
});
