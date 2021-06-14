import React, {Component} from 'react'
import{
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import {styles} from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import firestore from '@react-native-firebase/firestore';


export default class index extends Component{
    state={
        Name:"",
        Email: "",
        Area:"",
    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        this.loadEmail().then( () => {
            firestore().collection('thong_tin_nguoi_dung').get().then( (datas) => {
                datas.forEach( element => {
                    if ( element.id == this.state.Email){
                        this.setState({
                            Name: element.get("Name"),
                            Area: element.get("Area"),
                        });
                    }
                    
                })
                
            })
        })
    }
    
    async loadEmail(){
        var e = await AsyncStorage.getItem("email_used");
        if (e != null){
            this.setState({Email : e });
        }
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.panel}>
                    <Image
                        source={require('../../media/avatar.jpg')}
                        resizeMethod={"resize"}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Họ và Tên: <Text>{this.state.Name}</Text></Text>
                    <Text style={styles.text}>Email: <Text>{this.state.Email}</Text></Text>
                    <Text style={styles.text}>Khu vực: <Text>{this.state.Area}</Text></Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate("Login")}
                >
                    <AntDesign
                        name="logout"
                        size={30}
                        color="red"
                    />
                    <Text style={styles.textOut}> Đăng xuất</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

