import React from 'react';
import { Text, TextInput,Header, TouchableOpacity, View ,Image} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <Header>
                <TextInput 
                style={styles.writeText}
                placeholder="Header"/>
                 </Header>
                <View>
                  <TextInput
                  style={styles.writeText}
                  placeholder="Tittle"/>
                </View>
                <View>
                  <TextInput 
                  style={styles.writeText}
                  placeholder="Author"/>
                </View>
                <View>
                  <TextInput 
                  style={styles.writeText}
                  placeholder="Write Story"
                  >
                    
                  </TextInput>
                  <TouchableOpacity>
                    
                  </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      allignItems:'center'

    },
    writeText:{
      textAllign:'center',
      fontSize:15
    }
})