import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text,View, TouchableHighlight, TextInput } from 'react-native';

export default function calcimc(){
  //criação dos states agora
  const [peso,setPeso]= useState(0)
  const [altura,setAltura]= useState(0)
  const [resultado,setResultado]= useState(0)

  const calcImc =()=>{
    if(peso==0 || !peso )
    {
      alert('Informe o peso')
      return
    }
    if(altura ==0 || !altura){
      alert('Informe a Altura')
      return
    }
    const r= peso/(Math.pow(altura,2))
    setResultado(r.toFixed(1))
  }

  return(
    <SafeAreaView style= {styles.body} > 
      <View style={styles.container} >
      <Text>Calculadora de IMC</Text>  
      </View>      
      <View>
        <Text>Informe seu peso:</Text>
        <TextInput
          style= {styles.txt}
          autoFocus={true}
          keyboardType ={'numeric'}
          onChangeText={text=>setPeso(text)}
        ></TextInput>
      </View>
      <View>
        <Text>Informe sua Altura:</Text>
        <TextInput
          style= {styles.txt}
          autoFocus={false}
          keyboardType ={'numeric'}
          onChangeText={text=>setAltura(text)}
        ></TextInput>
      </View>
      
      <View style = {styles.container} >
        <TouchableHighlight
          style= {styles.btnCalc}
          onPress={()=>calcImc()}
        >
          <Text style = {styles.txtBtn} >Calcular IMC</Text>
        </TouchableHighlight>
      </View>
      <View style = {styles.container} >
        <Text>Resultado: {resultado}</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  body:{
    padding:10,
  },
  container:{
    marginBottom:20
  },
  txt:{
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding:10,
    borderRadius:10,
  },
  btnCalc:{
    backgroundColor:'#048',
    justifyContent:'center',
    alignItems: 'center',
    padding:10,
    borderRadius: 20,
  },
  txtBtn:{
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff'
  }
});