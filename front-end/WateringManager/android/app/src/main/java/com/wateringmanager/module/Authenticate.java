package com.wateringmanager; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Callback;

public class Authenticate extends ReactContextBaseJavaModule {
    Authenticate(ReactApplicationContext context) {
        super(context);
    }
    
    // add to CalendarModule.java
    @Override
    public String getName() {
        return "Authenticate";
    }

    @ReactMethod
    public void Login(String email, String password, Callback callBack) {
        if(email.equals("Admin") && password.equals("Admin")){
            callBack.invoke(1);
        }
        else{
            callBack.invoke(0);
        }
    }
}