import React, {Component} from 'react'
import{
    View,
    Text,
    ScrollView
} from 'react-native'
import {styles} from './style'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { loadOptions } from '@babel/core';


async function getApi(mqtt_key,aio_key){
    //https://io.adafruit.com/api/v2/hoangnh/feeds/soil-moisture/data.json?X-AIO-Key=aio_OcQG34N38YJv3DMr4KnQx3BADRMb
    var linkAPI = `https://io.adafruit.com/api/v2/${mqtt_key}/data.json?X-AIO-Key=${aio_key}`;
    try{
        let response = await fetch(linkAPI);
        let responseJson = await response.json();
        return responseJson[0].value;
    }catch(error){
        console.error(`Error is : ${error}`);
    }
     
};

export default class index extends Component{
    constructor (props){
        super(props);
        this.state = ({
            moisture : 0,
            temperature : 0
        });
    }

    componentDidMount(){
        this.loadMoisture();
        this.loadTemp();
    }

    loadMoisture(){
        getApi("hoangnh/feeds/soil-moisture","aio_OcQG34N38YJv3DMr4KnQx3BADRMb").then( (result) => {  
            this.setState( {moisture : result} ); 
        });
    }

    loadTemp(){
        getApi("hoangnh/feeds/temperature","aio_OcQG34N38YJv3DMr4KnQx3BADRMb").then( (result) => {  
            this.setState( {temperature : result} ); 
        });
    }

    render(){
        //
        //var apiMoisture = "";
        // getApi().then( (result) => {apiMoisture = result;} );
        // console.log(JSON.stringify(apiMoisture));
        // var do_am = JSON.stringify(apiMoisture) ;
        //var do_am = apiMoisture;
        

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
                                <Text> {this.state.moisture} </Text>
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

