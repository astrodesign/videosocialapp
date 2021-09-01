import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/*will be connecting with Stripe to connect a Token System. 

the users can pay for Tokens which they can use to send to contributors for 
creating content that they like. the hexagon on the home page options will
be used to quickly send tokens to a contribor. 

Each token will be able to be redeemed for a cash withdrawl. Only received 
tokens can be cashed out, not the ones you just paid for. 
*/

interface Props {
    
}

const ManageBalance = (props: Props) => {

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Balance</Text>
            <Text style={styles.balance}>100 Tokens</Text>
            <Text style={styles.equals}> = $25.00</Text>

            <View style={styles.optionslist}>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.option}>Withdrawl</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.option}>Deposit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ManageBalance

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        backgroundColor: '#171716',
    }, 
    title:{
        color: 'white', 
        fontSize: 25, 
        alignSelf: 'center', 
        marginBottom: 20, 
        marginTop: 20, 
    }, 
    equals:{
        color: 'white',
        fontWeight: 'bold', 
        fontSize: 20, 
        alignSelf: 'center', 
        marginBottom: 10, 
        marginTop: 10, 
    }, 
    balance:{
        marginTop: 30, 
        color: 'white', 
        fontSize: 30, 
        alignSelf: 'center', 
        fontWeight: 'bold'
    }, 
    option:{
        color:'white', 
        fontWeight: 'bold', 
        marginHorizontal: 30, 
        alignSelf: 'center',
        marginVertical: 50, 
    
    }, 
    optionslist:{
        flexDirection:'row',
        justifyContent: 'center'
    }, 
})
