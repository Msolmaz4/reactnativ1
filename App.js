import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [data,setData] = useState('')
  const [todo,setTodo] = useState([])
 const textHand = (ver)=>{
setData(ver)
 }
 const buttonHan = ()=>{
setTodo([...todo,data])
setData('')
 }
 
  return (
    <View style={styles.container}>
      <Text>denmeler ererereeeeeeeer</Text>
 <TextInput placeholder='adiniyi giriniy' onChangeText={textHand}/>
 <Button title='Ekle' onPress={buttonHan}></Button>
 {
todo?.map((item)=>(
  <Text key={item}>{item}</Text>
))
 }
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
