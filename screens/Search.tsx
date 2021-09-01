import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import FeaturedContributors from '../components/Search/FeaturedContributors'
import FeaturedHorizontal from '../components/Search/FeaturedHorizontal'
import SearchBar from '../components/Search/SearchBar'
import { LinearGradient } from 'expo-linear-gradient';
import { TabBarItem } from 'react-native-tab-view'

/* will be integrating ElasticSearch to showcase relevant search options.
this will let you search video titles, contributors, and genres
need to implement a database first. 

scan button DOES work, but I haven't implemented a QR code onto the accounts 
yet, so it's pointless until then. 

also will be working on Skeleton Load animations to allow for the featured items to render. */

interface Props {
    
}

export default function Search({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={["#541c00", "#000"]}
                style={StyleSheet.absoluteFill}
              />
            <SearchBar/>
            <Text style={styles.featured}>FEATURED</Text>
            <FeaturedHorizontal/>
            <FeaturedHorizontal/>
            <FeaturedHorizontal/>
            <FeaturedHorizontal/>
            <FeaturedHorizontal/>

        </ScrollView>
    )
};

const styles= StyleSheet.create({
    featured:{
        fontSize: 30,
        color: 'white', 
        fontWeight: 'bold', 
        marginVertical: 5,
        paddingHorizontal: 20, 
    }
})
