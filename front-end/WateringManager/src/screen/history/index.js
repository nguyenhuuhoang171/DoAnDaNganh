import React, {Component} from 'react'
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import styles from './style'
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class index extends Component{
    state={
        time:""
    }
    render(){
        const data=[
            {title:"Máy 1", temperature: "25", humidity:"75"},
            {title:"Máy 2", temperature: "25", humidity:"75"},
            {title:"Máy 3", temperature: "25", humidity:"75"}
        ]

        return(
            <ScrollView style={styles.container}>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={this.state.time}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({time:itemValue})}
                    >
                        <Picker.Item label="4:00" value="4:00" />
                        <Picker.Item label="5:00" value="5:00" />
                        <Picker.Item label="6:00" value="6:00" />
                        <Picker.Item label="7:00" value="7:00" />
                        <Picker.Item label="8:00" value="8:00" />
                        <Picker.Item label="9:00" value="9:00" />
                    </Picker>
                </View>
                <View style={styles.panel}>
                    {data.map(child=>(
                        <TouchableOpacity
                            key={child.title}
                            onPress={()=>this.props.navigation.navigate('DetailHistory')}
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