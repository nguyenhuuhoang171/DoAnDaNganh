import React,{Component} from 'react';
import {styles} from './style';
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default class index extends Component{
    state = {
        email: "",
        password: ""
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Smart Farm</Text>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({password:text})}
                    />
                </View>
                {/* // TODO FORGOTTEN PASSWOR /*}
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPW')}>
                    <Text style={styles.forgot}>Quên mật khẩu?</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('BottomTabs')}>
                    <Text style={styles.loginText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        );
    }
}