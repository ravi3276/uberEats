import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {
    return (
        <View style={{marginTop:15,flexDirection: 'row'}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInputContainer:{
                        backgroundColor:'#eee',
                        borderRadius:50,
                        flexDirection:'row',
                        alignItems: 'center',
                        marginRight:7
                    },
                    textInput:{
                        backgroundColor:'#eee',
                        borderRadius:20,
                        fontWeight:"700",
                        marginTop:5
                    }
                }}
                renderLeftButton={()=>(
                   <View marginLeft={10}>
                       <Ionicons name="location-sharp" size={24}/>
                   </View>
                )}

                renderRightButton={()=>(
                    <View style={{backgroundColor:'white',padding:9,borderRadius:30,marginRight:9,flexDirection:'row',alignItems: 'center'}}>
                        <AntDesign name="clockcircle" size={11} style={{marginRight:5}}/>
                        <Text>Search</Text>
                    </View>
                 )}

            />          
        </View>
    )
}

