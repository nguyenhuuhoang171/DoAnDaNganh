import React,{Component} from 'react';
import {styles} from './style';
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Authenticate from '../../model/login';
import auth from '@react-native-firebase/auth';

export default class index extends Component{
    state = {
        email: "",
        password: "",
        _auth: 0
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Smart Farm</Text>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    keyboardType = "email-address"
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    secureTextEntry = {true}
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

    login = (_auth) => {
        if(_auth === 1){
            this.props.navigation.navigate('BottomTabs');
        }
        else{
            Alert.alert("The Email or Password incorrect!");
        }  
    }

    authenticateLogin = () => {
        //Authenticate.Login(this.state.email, this.state.password, auth => this.login(auth));
        if(this.state.email === ''){
            alert('Email invalid!');
        }
        else if(this.state.password === ''){
            alert('Password invalid!');
        }
        else{
            auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.login(1);
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    alert('Email is not exits!')
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }
            });
        }
    }
}