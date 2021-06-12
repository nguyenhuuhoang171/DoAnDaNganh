import React, {Component} from 'react'
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import {styles} from './style'
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default class index extends Component{
    state={
        time:"",
        data:[]
    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        getApi("hoangnh/feeds/soil-moisture", "aio_zpPc43KdQ2oo7bsUoxu4BpiL1cZo" ).then( (moisture_datas)=>{
            getApi("hoangnh/feeds/temperature", "aio_zpPc43KdQ2oo7bsUoxu4BpiL1cZo" ).then((temp_datas)=>{
                var _data = [];
                for (let i = 0 ; i<4 ; i++){
                    _data.push({    title : "Máy 1",
                                    id: i,
                                    time: String(moisture_datas[i].created_at).substring(11,16),
                                    humidity : JSON.parse(moisture_datas[i].value).data,
                                    temperature : String(JSON.parse(temp_datas[i].value).data).split('-')[0] ,
                    });
                }
                this.setState({data : _data});
            });           
        });
    }

    render(){
        // const data=[
        //     {title:"Máy 1", temperature: "25", humidity:"75"},
        //     {title:"Máy 2", temperature: "25", humidity:"75"},
        //     {title:"Máy 3", temperature: "25", humidity:"75"}
        // ]

        return(
            <ScrollView style={styles.container}>
                {/* <View style={styles.picker}>
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
                </View> */}
                <View style={styles.panel}>
                    {this.state.data.map(child=>(
                        <TouchableOpacity
                            key={child.id}
                            //onPress={()=>this.props.navigation.navigate('DetailHistory')}
                            style={styles.buttonContainer} >
                            <Text style={styles.title}> {child.title}</Text>
                            <View style={styles.row}>
                                <FontAwesome
                                    name="clock-o"
                                    size={25}
                                    color="white"
                                />
                                <Text style={styles.text}>{child.time}</Text>
                            </View>
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
                                <Text style={styles.text}>{child.humidity}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        )
    }
}


async function getApi(mqtt_key,aio_key){
    var linkAPI = `https://io.adafruit.com/api/v2/${mqtt_key}/data.json?X-AIO-Key=${aio_key}`;
    try{
        let response = await fetch(linkAPI);
        let responseJson = await response.json();
        return responseJson;
    }catch(error){
        console.error(`Error is : ${error}`);
    }
     
};