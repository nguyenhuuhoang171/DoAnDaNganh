import React, {Component} from 'react'
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {LineChart} from "react-native-chart-kit";
import styles from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class index extends Component{
    render(){
        const data=[
            {time:"4:00", temperature: "25", humidity:"75"},
            {time:"5:00", temperature: "25", humidity:"75"},
            {time:"6:00", temperature: "25", humidity:"75"}
        ]
        return(
            <ScrollView style={styles.container}>
                <View style={styles.panel}>
                    <LineChart
                        data={{
                        labels: ["4:00", "5:00", "6:00", "7:00", "8:00", "9:00"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ],
                            color: () => 'red'
                            },
                            {
                                data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                                ],
                                color: () => 'blue',
                                
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width/1.18} 
                        height={Dimensions.get("window").height/3.5}
                        withDots={false}
                        withHorizontalLabels={false}
                        chartConfig={{
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        }}
                        style={{
                        marginVertical: 8,
                        borderRadius: 12
                        }}
                    />
                    {data.map(child=>(
                        <TouchableOpacity
                            key={child.time}
                            style={styles.buttonContainer} >
                            <Text style={styles.title}> {child.time}</Text>
                            <View style={styles.row}>
                                <FontAwesome
                                    name="thermometer-2"
                                    size={25}
                                    color="red"
                                />
                                <Text style={styles.text}>{' '+child.temperature}
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