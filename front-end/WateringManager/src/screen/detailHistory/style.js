import {ScaledSheet} from "react-native-size-matters";

export const styles=ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:"#222629",
        paddingHorizontal:"16@ms",
        paddingVertical:"16@vs"
    },
    panel:{
        backgroundColor:"#C4C4C4",
        borderRadius:"8@ms",
        padding:"12@ms",
        marginTop:"16@vs",
        flexDirection:"column",
        justifyContent:"space-between",
        flexWrap:"wrap",
    },
    buttonContainer:{
        backgroundColor:"#222629",
        width:"100%",
        borderRadius:"8@vs",
        padding:"16@vs",
        marginTop:"24@vs",
        flexDirection:"row",
        justifyContent:"space-between"
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
    },
    
    text:{
        fontSize:20,
        alignSelf:"center",
        color:"white"
    },
})