import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:60,
        paddingTop:18,
        backgroundColor:"coral",
    },
    title:{
        textAlign:'center',
        fontFamily:'italic',
        color:"white",
        fontSize:20,
        fontWeight:'bold',
    },
})