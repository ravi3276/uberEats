import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
      name: "The Downtown",
      image_url:
      'https://miro.medium.com/max/11192/0*da7aKNrewcGK1osR',
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.pexels.com/photos/3252051/pexels-photo-3252051.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
      "https://images.pexels.com/photos/4676640/pexels-photo-4676640.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];
  
export default function ResturentItem({navigation,...props}) {
    return (
      <>

        {
          props.restaurantData.map((restaurant,i) =>(
             <TouchableOpacity activeOpacity={1} style={{marginBottom:10}} onPress={() => navigation.navigate('ResturentDetails')}>
        <View key={i} style={{ backgroundColor:"white",padding:15,marginTop:10}}>
            <ResturentImage image={restaurant.image_url}/>
            <ResturentInfo name={restaurant.name} rating={restaurant.rating} reviews={restaurant.reviews}/>
        </View>
        </TouchableOpacity>
           )) 
        }
      </>
    )
}


const ResturentImage=(props)=>(
    <>
        <Image 
            source={{uri: props.image}}
            style={{width:'100%', height:180}}
        />
        <TouchableOpacity style={{position:'absolute', top:20, right:20}}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="#eee"/>
        </TouchableOpacity>
    </>
)

const ResturentInfo=(props)=>(
    <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',marginTop:10}}>
        <View>
        <Text style={{fontSize:15,fontWeight:'bold'}}>{props.name}</Text>
        <Text style={{fontSize:12,fontWeight:'bold',color:"grey"}}>30-45 . min</Text>
        </View>

        <View style={{height:30,width:30,backgroundColor:"#eee",alignItems: 'center',borderRadius:10,justifyContent: 'center'}}>
        <Text>{props.rating}</Text>
        </View>
    </View>

)
