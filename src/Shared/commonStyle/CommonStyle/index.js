import { StyleSheet } from "react-native"

const commonStyle = (fontSize, fontFamily) => StyleSheet.create({
 text: {
        fontSize: fontSize,
        fontFamily: fontFamily,
    }
})

export default commonStyle;