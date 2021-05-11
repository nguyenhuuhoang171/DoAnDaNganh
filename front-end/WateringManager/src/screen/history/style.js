import {ScaledSheet} from "react-native-size-matters";

export const styles=ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:"#222629",
        paddingHorizontal:"16@ms",
        paddingVertical:"16@vs"
    },
    picker:{
        backgroundColor:"white",
        borderRadius:"8@vs"
    },
    panel:{
        backgroundColor:"#C4C4C4",
        borderRadius:"8@ms",
        padding:"12@ms",
        marginTop:"16@vs",
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap",
    },
    buttonContainer:{
        backgroundColor:"#222629",
        height:"144@vs",
        width:"144@vs",
        borderRadius:"8@vs",
        padding:"8@vs",
        marginTop:"24@vs"
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:"12@vs",
    },
    
    text:{
        fontSize:20,
        alignSelf:"center",
        color:"white"
    },
})