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
import firestore from '@react-native-firebase/firestore';
import {getApi, postApi,getKey} from '../index.js'

export default class index extends Component{
    constructor (props){
        super(props);
        this.document = firestore().collection('thong_tin_may').doc("Máy 1");
        this.state = ({
            Tabfocused:"Auto",
            isOn:false,
            Name:"Máy 1",
            Min:"",
            Max:"",
            Time:
            [
                // {
                //     Id:"1",
                //     Begin:"06:00",
                //     End:"06:15",
                // },
                // {
                //     Id:"2",
                //     Begin:"09:00",
                //     End:"09:15",
                // },
            ]          
        });
    }
    
    componentDidMount() {
        this.loadStateSwitch();
        this.loadDataFireBase();
    }

    loadStateSwitch(){
        //getKey("BBC").then( (keyBBC) => {
            getApi("hoangnh/feeds/toggle-switch", "aio_zpPc43KdQ2oo7bsUoxu4BpiL1cZo" ).then( (result) => { 
                if (String(JSON.parse(result).data) == "1"){
                    this.setState( {isOn : true } ); 
                }else{
                    this.setState( {isOn : false } ); 
                }
                
            });
        //});
    }

    loadDataFireBase(){
        this.document.get().then( (doc) =>{
            this.setState( {
                Min : doc.get("Min"),
                Max : doc.get("Max")
            });
            firestore().collection('thong_tin_may').doc("Máy 1").collection("Time").get().then( times =>{
                let tempTime = [];
                times.forEach(element => {
                    tempTime.push({Id: element.get("Id"),Begin: element.get("Begin") ,End: element.get("End")});
                });
                this.setState({Time : tempTime});
            });
        });
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
                                                        value={String(this.state.Min)}
                                                        style={styles.timetext}
                                                        keyboardType = {"numeric"}
                                                        placeholderTextColor={"gray"}
                                                        onChangeText={(text) => {
                                                                let textNum = Number(text);
                                                                //textNum = textNum<0 ? 0 : textNum>1023 ? 1023 : textNum;
                                                                this.setState({Min:String(textNum)});
                                                                this.document.update({
                                                                    Min: textNum
                                                                });
                                                            }
                                                        }
                                                    />
                                                </View>
                                                <Text style={{color:"white",fontSize:35, marginLeft:6}}>-</Text>
                                                <View style={styles.containerinput}>
                                                    <TextInput
                                                        placeholder={"Max"}
                                                        value={String(this.state.Max)}
                                                        style={styles.timetext}
                                                        keyboardType = {"numeric"}
                                                        placeholderTextColor={"gray"}
                                                        onChangeText={(text)=>{
                                                            let textNum = Number(text);
                                                            //textNum = textNum<0 ? 0 : textNum>1023 ? 1023 : textNum<this.state.Min ? this.state.Min :textNum;
                                                            this.setState({Max:String(textNum)});
                                                            this.document.update({
                                                                Max: textNum
                                                            });
                                                        }}
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
                                                            onChangeText={(text)=>{
                                                                
                                                                let _time = this.state.Time.map( (ctime) =>{
                                                                    if(ctime.Id == childtime.Id){ctime.Begin = text };
                                                                    return ctime;
                                                                });
                                                                this.setState({Time : _time});
                                                                firestore().collection('thong_tin_may').doc("Máy 1").collection("Time").doc(String(childtime.Id)).update({Begin : text});
                                                            }}
                                                        />
                                                    </View>
                                                    <Text style={{color:"white",fontSize:28,marginLeft:8}}>-</Text>
                                                    <View style={styles.containerinput}>
                                                        <TextInput
                                                            placeholder={"--:--"}
                                                            value={childtime.End}
                                                            style={styles.timetext}
                                                            placeholderTextColor={"gray"}
                                                            onChangeText={(text)=>{
                                                                let _time = this.state.Time.map( (ctime) =>{
                                                                    if(ctime.Id == childtime.Id){ctime.End = text };
                                                                    return ctime;
                                                                });
                                                                this.setState({Time : _time});
                                                                firestore().collection('thong_tin_may').doc("Máy 1").collection("Time").doc(String(childtime.Id)).update({End : text});
                                                            }}
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
                                                    postApi("hoangnh/feeds/toggle-switch","aio_zpPc43KdQ2oo7bsUoxu4BpiL1cZo",{value:"{ \"id\":\"11\", \"name\":\"RELAY\", \"data\":\"1\", \"unit\":\"\" }"});
                                                }else{
                                                    postApi("hoangnh/feeds/toggle-switch","aio_zpPc43KdQ2oo7bsUoxu4BpiL1cZo",{value:"{ \"id\":\"11\", \"name\":\"RELAY\", \"data\":\"0\", \"unit\":\"\" }"});
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


