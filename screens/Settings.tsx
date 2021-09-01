import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

//currently just hear as a placeholder. none of the options store any state or data yet. 

const SettingsScreen = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.section}>Personal Settings</Text>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Personal Info</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Payment Methods</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Payment Methods</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Notifications</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <Text style={styles.section}>Personal Settings</Text>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Change Password</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Preferences</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <Text style={styles.section}>General</Text>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Rate App</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Legal</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.title}>Send Feedback</Text>
                    <Ionicons name='caret-forward-circle-outline' color='white' size={30}/>
                </TouchableOpacity>
            </View>





        </ScrollView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 20
    }, 
    section:{
        color: 'white', 
        fontSize: 20, 
        fontWeight: "bold", 
        marginVertical: 20
    },
    option: {
        width: '100%', 
        height: 50, 
        backgroundColor: '#191919',
        flexDirection: 'row',
        borderTopWidth: 2, 
        borderTopColor:'black', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 10,
        borderRadius: 10, 
    }
})

