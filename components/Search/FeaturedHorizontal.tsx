import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Contributor, Post } from '../../types';

interface ContributorProps {
    contributor: Post
}

const FeaturedHorizontal = (props: ContributorProps) => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Defeating 7 Exes',
          artist: 'Scott Pilgrim',
          artistImage: 'https://theplaylist.net/wp-content/uploads/2016/06/Scott-Pilgrim-vs.-the-World.jpg',
          postImage: 'https://theplaylist.net/wp-content/uploads/2016/06/Scott-Pilgrim-vs.-the-World.jpg',

        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Tips and Tricks for dating your aunt',
          artist: 'John Snow',
          artistImage: 'https://cdn.vox-cdn.com/thumbor/xiLy5ykvCnMwOceZVxcLnuUtl5s=/90x0:589x374/1200x800/filters:focal(90x0:589x374)/cdn.vox-cdn.com/uploads/chorus_image/image/49373861/kit-harington-sad-jon-snow-game-of-thrones.0.0.jpg',
          postImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/helen-sloan-hbo-1-1555965834.jpg',

        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Who is Spiderman? Definitely Not Me!',
          artist: 'Peter Parker',
          artistImage: 'https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg',
          postImage: 'https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg',

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            title: 'How I thtarted "Mike Tython Thmelling Thalth',
            artist: 'Mike Tython',
            artistImage: 'https://images.daznservices.com/di/library/omnisportcontentd/a4/ae/miketyson-cropped_miketyson_cropped_c1uk3uey7ffw1kd8ulho1i0zf.jpg?t=-2093979837&quality=100',
            postImage: 'data:image/jpeg;base64,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',

          },
      ];

      const navigation = useNavigation(); 
      const openContributor = () => navigation.navigate('Contributor');

      const Item = ({ title, artist, artistImage, postImage, artistColor }) => (
        <View>
            <TouchableOpacity>
                <View style={styles.item}>
                <Image source={{uri: postImage}} style={styles.postImage}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={openContributor}>
                <View style={styles.artistContainer}>
                    <Image source={{uri: artistImage}} style={styles.image}/>
                    <Text style={styles.artist}>{artist}</Text>
                </View>
            </TouchableOpacity>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} artist={item.artist} artistImage={item.artistImage} postImage={item.postImage} />
      );
    


    return (
        <View>
        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>
    )
}

export default FeaturedHorizontal

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: 'lightgrey',
      marginVertical: 16,
      marginHorizontal: 13,
      height: 220, 
      width: 170, 
      maxWidth: 170, 
      maxHeight: 220,
      borderRadius: 12,  
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 20, 
      left: 10, 
      color:'white'
    },
    artist:{
         paddingHorizontal: 20,
         color: 'white', 
         fontWeight: 'bold'
    }, 
    image:{
        width: 40, 
        height: 40, 
        resizeMode: 'cover', 
        borderRadius: 100, 
    }, 
    artistContainer: {
        flexDirection: 'row', 
        paddingHorizontal: 20, 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    postImage:{
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        borderRadius: 12, 
        resizeMode: 'cover'
    }, 
  });
