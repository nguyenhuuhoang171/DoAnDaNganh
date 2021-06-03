import React, {Component} from 'react'
import{
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import {styles} from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class index extends Component{
    state={
        Name:"Nguyen  Van A",
        Area:"Thành phố Hồ Chí Minh",
        Id:"0123456789"
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

