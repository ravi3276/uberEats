import React, { useEffect, useState } from 'react'
import { View, Text,SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native'
// import { Divider } from 'react-native-elements'
import BottomTab from '../components/BottomTab'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import ResturentItem, { localRestaurants } from '../components/ResturentItem'
import SearchBar from '../components/SearchBar'

const YELP_API_KEY ="bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
export default function Home({navigation}) {
   const[restaurantData,setRestaurantData] =useState(localRestaurants);
//    const getRestaurantDataYelp = () =>{
//        const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood';
//        const apiHeaders={
//            headers:{
//             Authorization: `Bearer ${YELP_API_KEY}`
//            }
//        }

//        return fetch(yelpUrl,apiHeaders)
//        .then((res)=>res.json())
//        .then((json)=>console.log(json))
//    }
//    useEffect(() => {
//     getRestaurantDataYelp();
//    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={{backgroundColor:"white",padding:15}}>
            <HeaderTabs />
            <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <ResturentItem restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>
            {/* <Divider /> */}
            <BottomTab />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight,
        backgroundColor:'#eee'
    }
})
