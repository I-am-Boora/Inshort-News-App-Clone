import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import InshortTab from './component/InshortTab';
import Context from './API/context'

function App() {
  return (
    <View style={{...styles.container,backgroundColor:'orange'}}>
      <InshortTab/>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    
  },
});
export default ()=>{
  return (
  <Context>
    <App/>
  </Context>
  )
}