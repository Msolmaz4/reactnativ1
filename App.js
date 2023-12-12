import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [data,setData] = useState('')
 const textHand = (ver)=>{
setData(ver)
 }
 const buttonHan = ()=>{
console.log(data)
 }
 
  return (
    <View style={styles.container}>
      <Text>denmeler erererer</Text>
 <TextInput placeholder='adiniyi giriniy' onChangeText={textHand}/>
 <Button title='Ekle' onPress={buttonHan}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
