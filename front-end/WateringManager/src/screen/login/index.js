import React, {Component} from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'

export default class index extends Component{
    render(){
        return(
            <View>
                <Text>Login Screen</Text>
                <TouchableOpacity
                    style={{
                        alignSelf:"center",
                        backgroundColor:"gray",
                        padding:12
                    }}
                    onPress={()=>this.props.navigation.navigate("BottomTabs")}>
                    <Text>Navigate BottomTabs</Text>
                </TouchableOpacity>
            </View>
        )
    }
}