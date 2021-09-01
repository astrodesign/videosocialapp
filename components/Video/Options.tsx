import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const Options = () => {
  const navigation = useNavigation(); 
  const openContributor = () =>  navigation.navigate('Contributor')

    return (
         
      <View style={styles.options}>

        <TouchableOpacity onPress={openContributor}>
        <Image
                style={styles.image}
                source={{uri: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png'}}/> 
        <View style={{position: 'relative', bottom: 10, alignSelf: 'center', backgroundColor: 'white', borderRadius: 30}}>
        <Ionicons name='add-circle' size={15} color='#a13600'/>
        </View>
        </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name='heart-outline' size={30} color='lightgrey'/>
        <Text style={{color:'white'}}>1.2K</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Feather name='message-square' size={30} color='lightgrey'/>
        <Text style={{color:'white'}}>3.2K</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Feather name='share-2' size={30} color='lightgrey'/>
        <Text style={{color:'white'}}>1.1K</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Feather name='hexagon' size={30} color='#a13600'/>
        <Text style={{color:'white'}}>500</Text>
      </TouchableOpacity>

      

    </View>
    )
}

export default Options

const styles = StyleSheet.create({
      options:{
        position: "absolute", 
        bottom: 50, 
        alignSelf: 'flex-end', 
        alignItems: 'center', 
        margin: 10, 
        justifyContent: 'space-evenly', 
        height: '50%', 
        paddingRight: 10, 
        zIndex: 2
      },
      image:{
        width: 50, 
        height: 50,
        resizeMode: 'cover', 
        borderRadius: 100, 
       
        
    }, 
    });