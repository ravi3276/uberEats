import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{
            flexDirection:"row",
            alignSelf: "center"
            }}>
           <HeaderButton text="Delivery" txtclr="white" bgcolor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
           <HeaderButton text="PickUp" txtclr="black" bgcolor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    )
}

const HeaderButton=(props)=>(
                    <TouchableOpacity style={{
                        backgroundColor: props.text === props.activeTab ? "black" : "white",  //insted of colour we can use props.bgcolour,txtclr
                        paddingHorizontal:16,
                        paddingVertical:6,
                        borderRadius:30,
                    }}
                    onPress={()=>props.setActiveTab(props.text)}
                    >
                        <Text style={{color:props.text === props.activeTab ? "white" : "black",fontSize:15,fontWeight:"bold"}}>
                        {props.text}
                        </Text>
                    </TouchableOpacity>
                    )
