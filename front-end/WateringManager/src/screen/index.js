import Login from './login'
import Register from './register'
import Home from './home'
import History from './history'
import DetailHistory from './detailHistory'
import Profile from './profile'
import Config from './config'

export const Screens={
   Login,
   Register,
   Home,
   History,
   DetailHistory,
   Profile,
   Config
}

export async function postApi(mqtt_key,aio_key,data){
    var linkAPI = `https://io.adafruit.com/api/v2/${mqtt_key}/data.json?X-AIO-Key=${aio_key}`;
    fetch(linkAPI,{
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }) ;
};
export async function getApi(mqtt_key,aio_key){
    var linkAPI = `https://io.adafruit.com/api/v2/${mqtt_key}/data.json?X-AIO-Key=${aio_key}`;
    try{
        let response = await fetch(linkAPI);
        let responseJson = await response.json();
        return responseJson[0].value;
    }catch(error){
        console.error(`Error is : ${error}`);
    }
     
};

export async function getKey(key){
    var linkKey = `http://dadn.esp32thanhdanh.link`;
    try{
        let response = await fetch(linkKey);
        let responseJson = await response.json();
        if(key == "BBC"){
            return responseJson.keyBBC;
        }
        if(key == "BBC1"){
            return responseJson.keyBBC1;
        }
    }catch(error){
        console.error(`Error is : ${error}`);
    }
}