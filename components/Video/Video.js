import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';


export default function BackgrounVideo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent','rgba(0,0,0,0.8)' ]}
        style={styles.background}
      />
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
        }}
        useNativeControls
        resizeMode="cover"
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    position: 'absolute', 
    width: '110%', 
    height: '110%', 
    resizeMode: 'contain', 
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    zIndex: 10, 
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
  },
  background:{
    width: '100%', 
    height: '100%', 
    zIndex: 10, 
    position: 'absolute', 
    justifyContent: 'center',
    alignSelf: 'center'
  }
});