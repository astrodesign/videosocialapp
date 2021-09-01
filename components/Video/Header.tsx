import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header = () => {
   
    /* will be creating a tab system. When one of these are clicked, 
    it'll show videos from THAT playlist. */

    return (
        <View style={styles.header}> 
            <TouchableOpacity>
             <Text style={styles.option}>Following</Text>
            </TouchableOpacity>

            
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20, }}> | </Text>

            <TouchableOpacity>
             <Text style={styles.option}>For You</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%', 
        flexDirection: 'row', 
        top: 70, 
        zIndex: 2, 
    }, 
    option:{
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginHorizontal: 15,
    }
})
