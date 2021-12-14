import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function MenuItems() {
    const menuItems =[
        {
            title:"Pizza",
            description:"a dish made typically of flattened bread dough ",
            price:"570",
            img_url:"https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            title:"Tandoori",
            description:"a dish made typically of flattened bread dough spread with a savory mixture usually",
            price:"330",
            img_url:"https://images.pexels.com/photos/9646843/pexels-photo-9646843.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            title:"Non-Veg Thali",
            description:"a savory mixture usually including tomatoes and cheese and often other toppings and baked.",
            price:"670",
            img_url:"https://images.pexels.com/photos/7340914/pexels-photo-7340914.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            title:"Burger",
            description:"a dish made typically of flattened bread dough spread",
            price:"250",
            img_url:"https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            title:"Noodles",
            description:"a dish made typically of flattened bread dough sprea",
            price:"570",
            img_url:"https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            title:"Noodles",
            description:"a dish made typically of flattened ",
            price:"570",
            img_url:"https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                menuItems.map((menuItem,i) =>(
                    <View key={i} style={{flexDirection:'column',margin:10}}>
                        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                            <BouncyCheckbox 
                            fillColor="green"
                            iconStyle={{ borderColor: "lightgrey",borderRadius:5 }}
                            />
                        <MenuInfo title={menuItem.title} description={menuItem.description} price={menuItem.price}/>
                        <MenuImage img_url={menuItem.img_url}/>
                        </View>
                        <View
                        style={{
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 1,
                            }}
                        />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const MenuImage=(props)=>(
    <Image 
        source={{uri: props.img_url}}
        style={{width:100,height:100,resizeMode:"contain",borderRadius:10}}
    />
)

const MenuInfo=(props)=>(
    <View style={{width:240,justifyContent: 'space-evenly'}}>
        <Text style={{fontSize:16,fontWeight:"bold",paddingVertical:5}}>{props.title}</Text>
        <Text style={{fontFamily:"sans-serif-light",fontWeight:"normal"}}>{props.description}....</Text>
        <Text style={{paddingVertical:3}}>{props.price}</Text>
    </View>
)