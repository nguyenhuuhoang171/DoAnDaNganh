import React, {Component} from 'react'
import{
    View,
    Text,
    ScrollView,
    BackHandler,
    Alert
} from 'react-native'
import {styles} from './style'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore';
import {getApi, postApi,getKey} from '../index.js'

export default class index extends Component{

    constructor (props){
        super(props);
        this.state = ({
            moisture : 0,
            temperature : 0
        });
    }

    disableBackButton=()=>{
        Alert.alert("Hold on!", "Are you sure you want to exit app", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.disableBackButton);
        this.loadMoisture();
        this.loadTemp();
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.disableBackButton);
    }

    loadMoisture(){
        //getKey("BBC").then( (keyBBC) => {
            getApi("CSE_BBC/feeds/bk-iot-soil", "" ).then( (result) => {  
                this.setState( {moisture : JSON.parse(result).data} ); 
            });
        //});
        this.checkMinMax();
    }

    loadTemp(){
        //getKey("BBC").then( ( keyBBC) => {
            getApi("CSE_BBC/feeds/bk-iot-temp-humid", "" ).then( (result) => {
                var temp_humid = JSON.parse(result).data;
                var i = temp_humid.indexOf("-");
                var temp = temp_humid.slice(0,i);
                this.setState( {temperature : temp} ); 
            });
        //});
        
    }

    checkMinMax(){
        firestore().collection('thong_tin_may').doc("Máy 1").get().then( (doc) =>{
            if ( doc.get("Min") > this.state.moisture ){
                //bơm
            }
            if(doc.get("Max") < this.state.moisture){
                // tắt máy bơm
            }
        });
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.panel}>
                    <Text style={styles.title}> Máy bơm 1</Text>
                    <View style={styles.row}>
                        <Text style={styles.text}>Nhiệt độ: 
                                <Text> {this.state.temperature}</Text>
                                <MaterialCommunityIcons
                                    name="temperature-celsius"
                                    size={20}
                                />
                            </Text>
                        <AnimatedCircularProgress
                            size={120}
                            fill={+this.state.temperature}
                            lineCap="round"
                            rotation={180}
                            arcSweepAngle={360}
                            width={12}
                            tintColor={"#CD390A"}
                            backgroundColor={"#F0F0F0"}
                            backgroundWidth={6}>
                            {()=>(
                                <View style={{justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{fontSize:20}}> {this.state.temperature}
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
                                <Text> {this.state.moisture} %</Text>
                            </Text>
                        <AnimatedCircularProgress
                            size={120}
                            fill={+this.state.moisture}
                            lineCap="round"
                            rotation={180}
                            arcSweepAngle={360}
                            width={12}
                            tintColor={"#2A67C2"}
                            backgroundColor={"#F0F0F0"}
                            backgroundWidth={6}>
                            {()=>(
                                <View style={{justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{fontSize:20}}> {this.state.moisture} %</Text>
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



