import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './localDb';

export default class App extends React.Component {

constructor(){
  super();
  this.state={
    text:"",
    chunks: [],
  }
}

  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Header backgroundColor={"yellow"} centerComponent={{text:'Monkey Chunkey',style:{color:"Black",fontSize:20,width:300}}}>
      </Header>
      <Image style={styles.imageIcon} source={{uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}}></Image>
      <TextInput style={styles.inputText} onChangeText={(text)=>{
        this.setState({text:text})
      }} value={this.state.text}/>
      <TouchableOpacity style={styles.goButton} onPress={()=>{
        this.setState({chunks:db[this.state.text].chunks})}}>
        <Text style={styles.buttonText} >go</Text>
      </TouchableOpacity>
      <View>
        {this.state.chunks.map(item=>{
          return(
            <TouchableOpacity style={styles.chunkButton}>
              <Text style={styles.displayText}>{item}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      
    </View>
    </SafeAreaProvider>
  );
 }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goButton:{
    width: '50%',
    height: 55,
    alignSelf:'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'bold',
  },
   inputText:{
     marginTop: 50,
     width: '50%',
     alignSelf: 'center',
     textAlign:'center',
     height: 40,
     borderWidth: 5,
  },
   imageIcon:{
     width: 150,
     height: 150,
     marginLeft: 60,
  },
  chunkButton:{
    width:'60%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius: 10,
    backgroundColor:'red',
    margin:5,
  }
});
