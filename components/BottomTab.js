import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTab() {
    return (
        <View style={{flexDirection:'row',justifyContent: 'space-between',margin:10,marginVertical:12}}>
        <Icons name="home" text="Home"/>
        <Icons name="search" text="Browse"/>
        <Icons name="shopping-bag" text="Gerocery"/>
        <Icons name="receipt" text="Orders"/>
        <Icons name="user" text="Profile"/>
        </View>
    )
}

const Icons=(props)=>(
    <View style={{alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.5}>
        <FontAwesome5 name={props.name} size={20} style={{alignSelf:"center",marginBottom:2}}/>
        <Text>{props.text}</Text>
        </TouchableOpacity>
    </View>
    )