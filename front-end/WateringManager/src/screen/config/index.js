import React, {Component} from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native'
import {styles} from './style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ToggleSwitch from 'toggle-switch-react-native'
import {Platform} from 'react-native';

export default class index extends Component{
    state={
        Tabfocused:"Auto",
        isOn:false,
        Name:"Máy 1",
        Min:"",
        Max:"",
        Time:
        [
            {
                Id:"1",
                Begin:"06:00",
                End:"06:15",
            },
            {
                Id:"2",
                Begin:"09:00",
                End:"09:15",
            },
        ]
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.panel}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[
                                {
                                    backgroundColor:this.state.Tabfocused=="Auto"?"#8A8C8E":"#474B4F"
                                },
                                styles.toptabs
                                ]}
                            onPress={()=>this.setState({Tabfocused:"Auto"})}
                                >
                            <Text style={styles.text}>Auto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                {
                                    backgroundColor:this.state.Tabfocused=="Timer"?"#8A8C8E":"#474B4F"
                                },
                                styles.toptabs
                            ]}
                            onPress={()=>this.setState({Tabfocused:"Timer"})}>
                            <Text style={styles.text}>Timer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                {
                                    backgroundColor:this.state.Tabfocused=="Manual"?"#8A8C8E":"#474B4F"
                                },
                                styles.toptabs
                            ]}
                            onPress={()=>this.setState({Tabfocused:"Manual"})}>
                            <Text style={styles.text}>Manual</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        style={styles.ListView}> 
                        {this.state.Tabfocused=="Auto"?
                                    <View 
                                        style={styles.viewdetail}
                                        key={this.state.Name}>
                                        <Text style={styles.text}>{this.state.Name}</Text>
                                            <View style={{flexDirection:"row"}}>
                                                <Ionicons
                                                    name="water"
                                                    size={25}
                                                    color="blue"
                                                    style={{marginTop:12}}
                                                />
                                                <View style={styles.containerinput}>
                                                    <TextInput
                                                        placeholder={"Min"}
                                                        value={this.state.Min}
                                                        style={styles.timetext}
                                                        placeholderTextColor={"gray"}
                                                        onChangeText={text=>this.setState({Min:text})}
                                                    />
                                                </View>
                                                <Text style={{color:"white",fontSize:35, marginLeft:6}}>-</Text>
                                                <View style={styles.containerinput}>
                                                    <TextInput
                                                        placeholder={"Max"}
                                                        value={this.state.Max}
                                                        style={styles.timetext}
                                                        placeholderTextColor={"gray"}
                                                        onChangeText={text=>this.setState({Max:text})}
                                                    />
                                                </View>
                                            </View>
                                        <View style={{flexDirection:"row",flexWrap:"wrap", justifyContent:"space-between"}}>
                                        {this.state.Time.map(childtime=>{
                                            return(
                                                <View
                                                    style={{flexDirection:"row", marginTop:14}}
                                                    key={childtime.Id}>
                                                    <FontAwesome
                                                        name="clock-o"
                                                        size={25}
                                                        color="white"
                                                    />
                                                    <Text style={styles.timetext}>{childtime.Begin}</Text>
                                                    <Text style={styles.timetext}>-</Text>
                                                    <Text style={styles.timetext}>{childtime.End}</Text>
                                                </View>   
                                            )
                                        })}
                                        </View>    
                                    </View>
                            :
                            this.state.Tabfocused=="Timer"?
                                    <View 
                                        style={styles.viewdetail}
                                        key={this.state.Name}>
                                        <Text style={styles.text}>{this.state.Name}</Text>
                                        {this.state.Time.map(childtime=>{
                                            return(
                                                <View
                                                    style={{flexDirection:"row", marginTop:14}}
                                                    key={childtime.Id}>
                                                    <FontAwesome
                                                        name="clock-o"
                                                        size={25}
                                                        color="white"
                                                        style={{marginTop:8}}
                                                    />
                                                    <View style={styles.containerinput}>
                                                        <TextInput
                                                            placeholder={"--:--"}
                                                            value={childtime.Begin}
                                                            style={styles.timetext}
                                                            placeholderTextColor={"gray"}
                                                            

                                                        />
                                                    </View>
                                                    <Text style={{color:"white",fontSize:28,marginLeft:8}}>-</Text>
                                                    <View style={styles.containerinput}>
                                                        <TextInput
                                                            placeholder={"--:--"}
                                                            value={childtime.End}
                                                            style={styles.timetext}
                                                            placeholderTextColor={"gray"}

                                                        />
                                                    </View>
                                                </View>   
                                            )
                                        })}            
                                    </View>
                            :
                                    <View 
                                        style={[styles.viewdetail,{flexDirection:"row",justifyContent:"space-between"}]}
                                        key={this.state.Name}>
                                        <Text style={[styles.text,{alignSelf:"center"}]}>{this.state.Name}</Text>
                                        <ToggleSwitch
                                            isOn={this.state.isOn}
                                            onColor="green"
                                            offColor="gray"
                                            onToggle={isOn =>{
                                                if( isOn == true){
                                                    postApi("hoangnh/feeds/toggle-switch","aio_zpPc43KdQ2oo7bsUoxu4BpiL1cZo",{value:"ON"});
                                                }else{
                                                    postApi("hoangnh/feeds/toggle-switch","aio_zpPc43KdQ2oo7bsUoxu4BpiL1cZo",{value:"OFF"});
                                                }
                                                this.setState({isOn:isOn});
                                            } }
                                            />
                                    </View>        
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

async function postApi(mqtt_key,aio_key,data){
    var linkAPI = `https://io.adafruit.com/api/v2/${mqtt_key}/data.json?X-AIO-Key=${aio_key}`;
    fetch(linkAPI,{
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }) ;
    // .then( (response) => {
    //     response.json();
    // }).then( (responseJSON) => {
    //     responseJSON[0].value
    // })
};