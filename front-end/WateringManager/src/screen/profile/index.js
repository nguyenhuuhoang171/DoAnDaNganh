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
        Id:""
    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        firestore().collection('thong_tin_nguoi_dung').get().then( (datas) => {
            datas.forEach( element => {
                this.setState({
                    Name: element.get("Name"),
                    Area: element.get("Area"),
                    Id: element.id
                });
            })
            
        }).then( () => {
            this.loadEmail();
        });
        
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
                    <Text style={styles.text}>Id: <Text>{this.state.Id}</Text></Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <AntDesign
                        name="logout"
                        size={30}
                        color="red"
                    />
                    <Text style={styles.textOut} > Đăng xuất</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

