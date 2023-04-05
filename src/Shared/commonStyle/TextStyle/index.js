import { color } from "@rneui/base";
import { StyleSheet } from "react-native"

const textStyle = (fontSize, fontFamily, color="white") => StyleSheet.create({ 
    text: {
        fontSize: fontSize,
        fontFamily: fontFamily,
    },

    color: {
        color: color,
    }
})

export default textStyle;
