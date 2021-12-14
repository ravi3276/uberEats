import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About() {
    const image_url="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const title="The Burning House 🔥 "
    const description="Noodels . Comfort Food . $$ . 🎫 . 4🌟 (2415+)";
    return (
        <View>
            <ResturentImage image_url={image_url}/>
            <ResturentTitle title={title}/>
            <ResturentDes description={description}/>
        </View>
    )
}

const ResturentImage=(props)=>(
    <Image 
        source={{uri:props.image_url}}
        style={{width:"100%", height:180}}
    />
)

const ResturentTitle=(props)=>(
        <Text style={{fontSize:20,fontWeight:"700",marginTop:10,marginHorizontal:15}}>
            {props.title}
        </Text>
)

const ResturentDes=(props)=>(
    <Text style={{fontSize:12,fontWeight:"700",marginHorizontal:15,marginBottom:5}}>
        {props.description}
    </Text>
)