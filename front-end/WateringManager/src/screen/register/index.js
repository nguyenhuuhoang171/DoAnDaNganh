import React, {Component} from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StyleSheet,
    Alert
} from 'react-native'
import auth from '@react-native-firebase/auth';


export default class index extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            name:"",
            area:"",
            id:""
        };
    }

    signup(){
        //auth().createUserWithEmailAndPassword(String(this.state.email),String(this.state.password) ).then( () =>{
            Alert.alert("Sign up successful !");
        //});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    keyboardType = "email-address"
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Password (ít nhất 6 kí tự)"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({password:text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Tên"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({name:text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Địa điểm"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({area:text})}
                    />
                </View>
                <TouchableOpacity style={styles.signupBtn} onPress={this.signup}>
                    <Text style={styles.signupText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40
    },
    inputView: {
        width: '80%',
        backgroundColor: '#465881',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    inputText: {
        height: 50,
        color: 'white'
    },
    forgot: {
        color: 'white',
        fontSize: 14
    },
    signupBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    signupText: {
        color: 'white',
        fontSize: 16
    },
});