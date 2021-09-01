import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, Touchable, TextInput, KeyboardAvoidingView} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function EditProfile() {

  const navigation = useNavigation(); 
  const openManageBalanceModal = () => navigation.navigate('ManageBalance'); 

  return (
      <KeyboardAvoidingView style={styles.container}>
          <LinearGradient
                colors={["#007373", "#000"]}
                style={StyleSheet.absoluteFill}
              />
        <Text style={styles.title}>Walker Lillard</Text>
        <Image style={styles.image} source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLRTBhkesVVxQLW2VAYseampR48a4O-L37u4M0KaCA=s900-c-k-c0x00ffffff-no-rj'}}/>

      <View style={styles.inputcontainer}>
        <TextInput
        style={styles.input}
        placeholder="User Name"
        keyboardType="default"
        placeholderTextColor='lightgrey'
        />    

        <TextInput
        style={styles.input}
        placeholder="First Name"
        keyboardType="default"
        placeholderTextColor='lightgrey'
        /> 

        <TextInput
        style={styles.input}
        placeholder="Last Name"
        keyboardType="default"
        placeholderTextColor='lightgrey'
        />   

        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor='lightgrey'
        />     

    </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 50, 
    paddingBottom: 20, 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image:{
    paddingTop: 20, 
    width: 130, 
    height: 130, 
    borderRadius:100, 
    alignSelf: 'center'
  }, 
  headerIcon:{
    flexDirection: 'row', 
    alignItems: 'center'
  }, 
  header:{
    width: '90%', 
    paddingTop: 20, 
    justifyContent: 'space-around', 
    flexDirection: 'row'
  }, 
  stats:{
    fontWeight: 'bold', 
    paddingHorizontal: 10, 
    
  }, 

  button:{
    backgroundColor: 'gold', 
    marginVertical: 20, 
    marginHorizontal: 30, 
    paddingHorizontal: 20,
    paddingVertical: 13, 
    borderRadius: 10 
  }, 
  buttonText:{
      fontSize: 15, 
      fontWeight: 'bold', 
  }, 
  input:{
      color: 'white', 
      fontSize: 20, 
      fontWeight: 'bold', 
      marginVertical: 10, 
      alignContent: 'center', 
      justifyContent: 'center', 

  }, 

});

