import React from 'react'
import { View, Text } from 'react-native'
import About from '../components/ResturentDetails/About'
import MenuItems from '../components/ResturentDetails/MenuItems'

export default function ResturentDetails() {
    return (
        <View>
            <About />
            <View
            style={{
             borderBottomColor: 'lightgrey',
             borderBottomWidth: 1,
                }}
            />
            <MenuItems />
        </View>
    )
}
