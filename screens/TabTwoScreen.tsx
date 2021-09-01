import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, Touchable} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  const navigation = useNavigation(); 
  const openManageBalanceModal = () => navigation.navigate('ManageBalance'); 
  const openEditProfile = () => navigation.navigate('EditProfile'); 
  const openSettings = () => navigation.navigate('Settings')

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
                colors={["#2b2b2b", "#000"]}
                style={StyleSheet.absoluteFill}
              />
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={openEditProfile}>
          <Ionicons name='pencil' color='white' size={20}/>
          <Text>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerIcon} onPress={openSettings}>
          <Ionicons name='settings' color='white' size={20}/>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.title}>Walker Lillard</Text>
      <Image style={styles.image} source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLRTBhkesVVxQLW2VAYseampR48a4O-L37u4M0KaCA=s900-c-k-c0x00ffffff-no-rj'}}/>
      <TouchableOpacity style={styles.button} onPress={openManageBalanceModal}>
      <LinearGradient
                colors={["#a13600", "#4a1900"]}
                style={[{borderRadius:10}, StyleSheet.absoluteFill]}
              />
        <Text style={styles.buttonText}> 
          Manage Balance
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollList}>
        
        <Text style={styles.stats}>90 Followers</Text>
        <Text style={styles.stats}>20 Subscribed To</Text>
        <Text style={styles.stats}>$1.1K Earned </Text>
        <Text style={styles.stats}>10K Views</Text>
        <Text style={styles.stats}>15% Improvement (last month)</Text>


        <View>
          
        </View>

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
