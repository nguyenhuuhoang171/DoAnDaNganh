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
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:"12@vs",
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center"
    },
    text:{
        fontSize:20,
        alignSelf:"center"
    },
})