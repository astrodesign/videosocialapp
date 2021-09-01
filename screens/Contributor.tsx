import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React  from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, Touchable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState } from 'react';

/*this contributor page will remain basic, but I DO intend on adding a list of 
videos underneath the contributor's analytics. 

An interesting style choice is that I am going to build our a hex-color picker
which allows each user to set their own Linear Gradient on the app. I figured
this will add a unique personal touch the app and create a sense of individuality 
for each user. */

export default function Contributor() {

  const [notFollowing, setFollowing]= useState(true); 


  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
                colors={["#a13600", "#000"]}
                style={StyleSheet.absoluteFill}
              />

      <Text style={styles.title}>Walker Lillard</Text>
      <Image style={styles.image} source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLRTBhkesVVxQLW2VAYseampR48a4O-L37u4M0KaCA=s900-c-k-c0x00ffffff-no-rj'}}/>
      <TouchableOpacity style={styles.button} onPress={(prevState)=>setFollowing(!prevState)}>
      <LinearGradient
                colors={['red', "#4a1900"]}
                style={[{borderRadius:10}, StyleSheet.absoluteFill]}
              />
        <Text style={styles.buttonText}> 
          {notFollowing ? 'Follow' : "Subscribed"}
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollList}>
        
        <Text style={styles.stats}>90 Followers</Text>
        <Text style={styles.stats}>20 Subscribed To</Text>
        <Text style={styles.stats}>$1.1K Earned </Text>
        <Text style={styles.stats}>10K Views</Text>
        <Text style={styles.stats}>15% Improvement (last month)</Text>

      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#a13600', 
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

});