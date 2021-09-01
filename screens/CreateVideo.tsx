import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

/* currently just has the functionality to see the camera views and switch
between front and selfie cameras. recording and editing are next on this feature */

export default function CreateVideo() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.switchbutton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name='camera-reverse' size={30} color='white'/>
          </TouchableOpacity>
        </View>
      </Camera>

        {/* this is the button which will be used to record the video, doesn't do anything yet*/}
      <TouchableOpacity style={styles.recordbutton}>
          <Feather name='circle' color='lightgrey' size={70}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        height: '100%', 
        width: '100%'
    }, 
    camera:{
        height: '100%', 
        width: '100%',
    }, 
    buttonContainer:{
        width: '100%'
    }, 
    switchbutton:{
        marginTop: 75, 
        marginLeft: 30, 
    }, 
    recordbutton: {
        backgroundColor:'transparent', 
        position: 'absolute', 
        bottom: 50, 
    }
});
