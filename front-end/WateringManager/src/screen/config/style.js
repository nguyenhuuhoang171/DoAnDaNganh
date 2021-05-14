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
        marginTop:"16@vs",
        flexDirection:"column",
        justifyContent:"space-between",
        flexWrap:"wrap",
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    toptabs:{
        padding:"12@ms",
        borderWidth:1,
        borderColor:"white",
        width:"33.33%"
    },
    text:{
        fontSize:20,
        alignSelf:"center",
        color:"white",
        marginBottom:"12@vs"
    },
    ListView:{
        padding:"12@ms",
        
    },
    viewdetail:{
        backgroundColor:"#222629",
        borderRadius:"8@vs",
        padding:"16@vs",
        marginTop:"24@vs",
    },
    picker:{
        width:"44%"
    },
    timetext:{
        color:"white",
        fontSize:16,
        marginLeft:"6@ms"
    },
    containerinput:{
        borderWidth:1,
        borderRadius:"8@vs",
        alignItems:'center',
        borderColor:"white",
        height:"90%",
        width:"40%",
        marginLeft:"8@ms"
    },

})