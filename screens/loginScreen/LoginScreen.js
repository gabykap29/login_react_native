import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native-web";

export default function LoginScreen({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () =>{
        
        navigation.navigate('Home',{username});
    };

    return(
        <View style={styles.container} >
            <Text style={styles.title}> Iniciar Sesión </Text>
                <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                value={username}
                onChangeText={setUsername}
                />
                <TextInput
                style={styles.input}
                placeholder='Contraseña'
                value={password}
                onChangeText={setPassword}
                />
                <View style={styles.buttonLogin}>
                    <Button  title='Iniciar' onPress={handleLogin} />
                </View>
                <Button title='Registrarse' onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      
    },
    buttonLogin:{
      marginBottom: 5
    }
  });
