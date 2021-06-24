import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Task =(props)=>{
     return (
        
         <View style={styles.taskL}>
             <View><Text>{props.text}</Text></View>
             

         </View>
        
     )
}

const styles = StyleSheet.create({
    taskL:{
        backgroundColor:'#FFFFFF',
        padding:20,
        borderRadius:10,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
        
    },
})


export default Task;