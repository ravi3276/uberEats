import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

export default function Categories() {
    const items=[
        {
            images:require("../assets/images/shopping-bag.png"),
            text:"Pick-Up"
        },
        {
            images:require("../assets/images/soft-drink.png"),
            text:"Sofr-drinks"
        },
        {
            images:require("../assets/images/bread.png"),
            text:"Bekery"
        },
        {
            images:require("../assets/images/fast-food.png"),
            text:"Fast-Food"
        },
        {
            images:require("../assets/images/deals.png"),
            text:"Deals"
        }
    ]
    return (
        <View style={{backgroundColor:"white",marginTop:5,paddingLeft:20,paddingVertical:10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                items.map((item,i)=>(
                    <View key={i} style={{marginRight:30,alignItems: 'center'}}>
                    <Image source={item.images} style={{height:40,width:50,resizeMode:'contain'}}/>
                    <Text style={{fontWeight:"700",fontSize:13}}>{item.text}</Text>
                    </View>
                ))
            }
        </ScrollView>
        </View>
    )
}
