import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SearchBar = () => {
    const navigation = useNavigation(); 
    const openScanner=()=> navigation.navigate('Scanner'); 

    return (
    <View style={styles.container}>
        <View style={styles.icon}>
        <Feather name='search' color='black' size ={20}/>
        </View>

        <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        placeholder="Search"
        placeholderTextColor='grey'
        keyboardType="default"
        maxLength={40}
        color='black'
        fontSize={20}
        /> 

        <TouchableOpacity style={styles.button} onPress={openScanner}>
            <Ionicons name='scan-outline' color='white' size={30}/>
        </TouchableOpacity>
    </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
      width: '100%', 
      marginTop: 60,
      padding: 10,  
      flexDirection: 'row', 
    },
    input:{
        backgroundColor: 'lightgrey', 
        color:'white', 
        paddingVertical: 7,
        paddingLeft: 50, 
        width: '90%', 
        borderRadius: 6,  
        
    }, 
    button:{
        marginHorizontal: 15, 
    }, 

    icon:{
        position: 'absolute', 
        zIndex: 2, 
        left: 20,
        top: 18,  
    },
})
