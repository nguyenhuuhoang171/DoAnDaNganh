import React,{Component} from 'react';
import {styles} from './style';
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Authenticate from '../../model/login';

export default class index extends Component{
    state = {
        email: "",
        password: "",
        // auth: 0
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
                <TouchableOpacity style={styles.loginBtn} onPress={this.authenticateLogin}>
                    <Text style={styles.loginText}>Đăng nhập</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Đăng ký {this.state.auth}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    login = (auth) => {
        if(auth === 1){
            this.props.navigation.navigate('BottomTabs');
        }
        else{
            Alert.alert("The Email or Password incorrect!");
        }  
    }

    authenticateLogin = async (callback) => {
        Authenticate.Login(this.state.email, this.state.password, (auth) => this.login(auth));
    }
}