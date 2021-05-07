import React, {Component} from 'react'
import{
    View,
    Text,
    ScrollView
} from 'react-native'
import styles from './style'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class index extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.panel}>
                    <Text style={styles.title}> Máy bơm 1</Text>
                    <View style={styles.row}>
                        <Text style={styles.text}>Nhiệt độ: 
                                <Text> 25</Text>
                                <MaterialCommunityIcons
                                    name="temperature-celsius"
                                    size={20}
                                />
                            </Text>
                        <AnimatedCircularProgress
                            size={120}
                            fill={25}
                            lineCap="round"
                            rotation={180}
                            arcSweepAngle={360}
                            width={12}
                            tintColor={"#CD390A"}
                            backgroundColor={"#F0F0F0"}
                            backgroundWidth={6}>
                            {()=>(
                                <View style={{justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{fontSize:20}}> 25
                                        <MaterialCommunityIcons
                                            name="temperature-celsius"
                                            size={20}
                                        />
                                    </Text>
                                </View>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Độ ẩm: 
                                <Text> 75%</Text>
                            </Text>
                        <AnimatedCircularProgress
                            size={120}
                            fill={75}
                            lineCap="round"
                            rotation={180}
                            arcSweepAngle={360}
                            width={12}
                            tintColor={"#2A67C2"}
                            backgroundColor={"#F0F0F0"}
                            backgroundWidth={6}>
                            {()=>(
                                <View style={{justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{fontSize:20}}> 75%</Text>
                                </View>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                </View>
            </ScrollView>
        )
    }
}