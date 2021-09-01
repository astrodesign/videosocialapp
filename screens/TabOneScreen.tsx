import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Video } from "expo-av"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import Options from '../components/Video/Options';
import Title from '../components/Video/Title';
import Header from '../components/Video/Header';
import BackgroundVideo from '../components/Video/Video';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  return (
    <View style={styles.container}>
      <Header/>
      <Options/>
      <Title/>
      <BackgroundVideo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  options:{
    position: "absolute", 
    bottom: 0, 
    alignSelf: 'flex-end', 
    alignItems: 'flex-end', 
    margin: 10, 
    justifyContent: 'space-evenly', 
    height: '65%', 
    paddingRight: 10, 
  }
  
});
