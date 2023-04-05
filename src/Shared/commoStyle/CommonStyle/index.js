import {StyleSheet} from 'react-native';
import fontValue from '../FontValue';

export const commonStyle = (obj) => {
     
  const {
     fontSize = 14, 
     color = '#7E7E7E',  
     backgroundColor = '#FF2156'}= obj
       
     const  styles = StyleSheet.create({
        text: {
          fontSize: fontSize,
          color:color
        },
    
        color: {
          color: color,
        },
        background: {
          backgroundColor: backgroundColor,
        },
      })

      return styles
   
  };





 export const commonJustify = StyleSheet.create({
   rowCenter: {
     flexDirection: "row",
     justifyContent: "center",
   },
   rowFlexEnd: {
     flexDirection: "row",
     justifyContent: "flex-end",
   },
   rowFlexStart: {
     flexDirection: "row",
     justifyContent: "flex-start",
   },
   rowSpaceAround: {
     flexDirection: "row",
     justifyContent: "space-around",
   },
   rowSpaceBetween: {
     flexDirection: "row",
     justifyContent: "space-between",
     borderRadius: 25,
     padding: 10,
     elevation: 1,
     shadowColor: "#000000",
     shadowOffset: { width: 0, height: 3 },
     shadowOpacity: 0.1,
     shadowRadius: 7.5,
   },
   rowSpaceEvenly: {
     flexDirection: "row",
     justifyContent: "space-evenly",
   },

   center: {
     justifyContent: "center",
   },
   textCenter: {
     textAlign: "center",
   },
 });
