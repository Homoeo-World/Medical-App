import { StyleSheet } from "react-native";
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white"
    },
    statisticsBox:{
        margin: '5%',
        padding: '5%',
        backgroundColor: theme.primaryColor,
    }
});