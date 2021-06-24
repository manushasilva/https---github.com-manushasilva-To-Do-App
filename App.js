import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Modal,Button } from 'react-native';
import { colors } from './Colors';
import Task from './Component/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'


const Home =({navigation}) => {
     return (
      <View style={styles.container}>

      {/*---------------------App Name -------------------- */}
       <View style={styles.topic}>
         <Text style={styles.topicMy}>My<Text style={styles.topicTodo}>Todo</Text></Text>
       </View>
       {/* ------------------------------------------------- */}

       {/* --------------------Task Menu-------------------- */}
       <View style={styles.taskM}>
         
          <Task text={'manusha'}/>
          <Task text={'kscns cssocs slcosc slcsoco'}/>
          <Task text={'dlfmljdofjfkpe scjeoejfce eoejfefe eofeo'}/>
          <Task text={'feofjefj'}/>
          <Task text={'Silflefojeva'}/>
          <Task text={'Silfelme efojeova'}/>
        
         
       </View>
       {/* ------------------------------------------------- */}

       {/* ------------------bottom menu--------------------- */}
       <View style={styles.bottomM}>
        
         <View style={styles.TodoB}><TouchableOpacity style={styles.TodoL} onPress={()=> navigation.navigate('Home')}>+</TouchableOpacity><Text style={styles.TodoN}>Todo</Text></View>
         <View style={styles.DoneB}><TouchableOpacity style={styles.TodoL} onPress={()=> navigation.navigate('DoneMenu')}>+</TouchableOpacity><Text style={styles.TodoN}>Done</Text></View>
         <View style={styles.LogOutB}><TouchableOpacity style={styles.TodoL} onPress={()=> navigation.navigate('Login')}>+</TouchableOpacity><Text style={styles.TodoN}>LogOut</Text></View>

       </View>

       <View style={styles.AddTaskC}>
       <TouchableOpacity  onPress={()=> navigation.navigate('Index')}><Text></Text>+</TouchableOpacity>
       {/* <Button onPress={()=>{navigation.navigate('Index')} } /> */}
       </View>
       {/* ------------------------------------------------------- */}

       {/* -------------------------MOdel------------------------ */}


       {/* ---------------------------------------------------- */}
      </View>
     );


}
// ---------------------------------------------------------------------------------------------------------------------
// -----------------------------------Index---------------------------------------------------------
    const Index = ({navigation}) =>{
      return(
        <View style={styles.container}>
          <View style={styles.topic}>
          <Text style={styles.topicMy}>My<Text style={styles.topicTodo}>Todo</Text></Text>
          </View>

          <View>
            <Text>Title</Text>
            <input/>
            <Text>Assignee</Text>
            <input/>
            <Text>Due Date</Text>
            <input/>
            <View style={styles.addTask2}>
               <TouchableOpacity><Text>+ Add the Task</Text></TouchableOpacity>
            </View>
            <View style={styles.addTask2}>
               <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Text>Cancel</Text></TouchableOpacity>
            </View>
            
          </View>
        </View>
      );
    }
// --------------------------------------------------------------------------------------------------------------------

// -----------------------------------------Login---------------------------------------------------------------------

 const Login = ({navigation}) =>{
   return(
     <View style={styles.container}>
        
         <View style={styles.logB}>

       <View style={{padding:20}}><TouchableOpacity  style={styles.logF}><Text>Face Book</Text></TouchableOpacity></View>
       <View><TouchableOpacity style={styles.logG}><Text>Gmail</Text></TouchableOpacity></View>

         </View>
     </View>
   );
 }
// ---------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------Done Menu------------------------------------------------------------------------

const DoneMenu = ({navigation}) =>{
  return(
    <View style={styles.container}>

      {/*---------------------App Name -------------------- */}
      <View style={styles.topic}>
         <Text style={styles.topicMy}>My<Text style={styles.topicTodo}>Todo</Text></Text>
       </View>
       {/* ------------------------------------------------- */}
      <View><Text>Done 01</Text></View>
      <View><Text>Done 02</Text></View>


      <View style={styles.bottomM2}>
        
        <View style={styles.TodoB}><TouchableOpacity style={styles.TodoL} onPress={()=> navigation.navigate('Home')}>+</TouchableOpacity><Text style={styles.TodoN}>Todo</Text></View>
        <View style={styles.DoneB}><TouchableOpacity style={styles.TodoL} onPress={()=> navigation.navigate('DoneMenu')}>+</TouchableOpacity><Text style={styles.TodoN}>Done</Text></View>
        <View style={styles.LogOutB}><TouchableOpacity style={styles.TodoL} onPress={()=> navigation.navigate('Login')}>+</TouchableOpacity><Text style={styles.TodoN}>LogOut</Text></View>

      </View>
    </View>

    
  );
}
// ----------------------------------------------------------------------------------------------------------------
const Stack= createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name="Home" component={Home}/>
          <Stack.Screen name="Index" component={Index}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="DoneMenu" component={DoneMenu}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// -------------------------------Style-------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96ABA0',
    
    
  },
  modalcs:{
    backgroundColor:colors.black,
    flex:1,
    width:100

  },
  
      //  --------------------App Name-------------------
  topic:{
    backgroundColor: '#680386',
    paddingTop:20,
    paddingBottom:20,
    alignItems:'center'
    

  },
  topicMy:{
      fontSize:20,
      fontWeight:'100',
      color:colors.white
  },
  topicTodo:{
     fontSize:20,
     fontWeight:'800',
     color:colors.lightblue
  },
// ---------------------------------------------------------------------

// -----------------------Task Display------------------------------
  taskM:{
    marginTop:10,
    
  },
 
// ------------------------------------------------------------------

// ---------------------------bottom------------------------------------
addTask2:{
  backgroundColor:colors.lightblue,
  alignItems:'center',
  borderRadius:60,
  borderWidth:1,

},
bottomM:{
    backgroundColor:colors.white,
    alignItems:"center",
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    width:'100%'
},
bottomM2:{
  backgroundColor:colors.white,
  alignItems:"center",
  position:'absolute',
  top:718,
  flexDirection:'row',
  width:'100%',
  flex:1,
},
AddTaskC:{
    position:'absolute',
    bottom:50,
    alignItems:'flex-end',
    padding:20,
    backgroundColor:colors.lightblue,
    borderRadius:60,
    borderWidth:1,
    justifyContent:'center',
    fontSize:32,
    width:60,
    height:60,
    color:colors.white,
   
},
AddTaskB:{
  borderRadius:60,
  borderWidth:1,
 

},
TodoL:{
  width:20,
  height:20,
  backgroundColor:colors.lightblue,
  justifyContent:'center',
  borderRadius:60,
  borderWidth:1
},
TodoN:{
  alignItems:'center'
},
TodoB:{
  flexDirection:'column',
  padding:2,
  alignItems:'center',
  paddingHorizontal:50,
  


},
DoneB:{
  flexDirection:'column',
  padding:2,
  alignItems:'center',
  paddingHorizontal:50,
  justifyContent:'center',
  
  
},
LogOutB:{
  flexDirection:'column',
  padding:2,
  alignItems:'center',
  paddingHorizontal:50,
  justifyContent:'center',
  
  
  
},
logB:{
  alignItems:'center',
  top:350
},
logF:{
  backgroundColor:colors.blue,
  padding:100,
  width:150,
  height:50,
  justifyContent:'center',
  alignItems:'center',
  paddingHorizontal:5,
  paddingVertical:7,
},
logG:{
  backgroundColor:colors.red,
  padding:5,
  width:150,
  height:50,
  justifyContent:'center',
  alignItems:'center',
  paddingHorizontal:5,
  paddingVertical:7,
  bottom:5
},
});
