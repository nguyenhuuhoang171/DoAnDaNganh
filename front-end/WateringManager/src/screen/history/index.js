import React, {Component} from 'react'
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import styles from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class index extends Component{
    render(){
        const data=[
            {title:"Máy 1", temperature: "25", humidity:"75"},
            {title:"Máy 2", temperature: "25", humidity:"75"},
            {title:"Máy 3", temperature: "25", humidity:"75"}
        ]
        return(
            <ScrollView style={styles.container}>
                <View style={styles.panel}>
                    {data.map(child=>(
                        <TouchableOpacity
                            key={child.title}
                            style={styles.buttonContainer} >
                            <Text style={styles.title}> {child.title}</Text>
                            <View style={styles.row}>
                                <FontAwesome
                                    name="thermometer-2"
                                    size={25}
                                    color="red"
                                />
                                <Text style={styles.text}>{child.temperature}
                                <MaterialCommunityIcons
                                    name="temperature-celsius"
                                    size={20}
                                    color="white"
                                />
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Ionicons
                                    name="water"
                                    size={25}
                                    color="blue"
                                />
                                <Text style={styles.text}>{child.humidity}%</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        )
    }
}