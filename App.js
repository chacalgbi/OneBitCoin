import React from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from "./src/components/CurrentPrice";
import Historico_Grafico from "./src/components/HistoryGraphic";
import Lista_Cotacoes from "./src/components/QuotationsList";
import Lista_Itens from "./src/components/QuotationsList/QuotationsItens";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#f50d41" barStyle="light-content" />
      <CurrentPrice />
      <Historico_Grafico />
      <Lista_Cotacoes />
      <Lista_Itens />
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
