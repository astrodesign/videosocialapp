import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


//use this to hold the title and description of the video clips. 
const Title = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}> 
            
            <TouchableOpacity style={styles.contributorButton}
            onPress={()=>navigation.navigate('Contributor')}>
                <Text style={styles.contributor}>@Contritubor</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Video Title</Text>
            <Text style={styles.description}>this is the video description, it should hide after like 5 seconds.</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold', 
        position: 'absolute', 
        bottom: 70, 
    }, 
    contributorButton:{
        color: 'white', 
        fontSize: 18, 
        position: 'absolute',
        bottom: 20 
    }, 
    contributor:{
        color: 'white', 
        fontSize: 18, 
        position: 'absolute', 
        bottom: 100, 
    }, 
    container: {
        height: '100%',
        width: '80%' , 
        zIndex: 1, 
    }, 
    description:{
        color: 'white', 
        position: 'absolute', 
        bottom: 30,
        fontSize: 12, 
    }, 
    image:{
        width: 50, 
        height: 50,
        marginRight: 10, 
        resizeMode: 'cover', 
        borderRadius: 100, 
    }, 
})
