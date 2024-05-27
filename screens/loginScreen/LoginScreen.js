import React, {useContext, useState} from "react";
import { View, Text, TextInput,Alert, Button, StyleSheet } from "react-native";
import { contexAutentication } from "../../contex/Contex";

export default function LoginScreen({navigation}){
    const [username, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const {user, password} = useContext(contexAutentication);
    const handleLogin = () =>{
      if (!user || !password) {
        // No user registered yet, show message or disable login
        console.log('Aún no se ha registrado ningún usuario.');
        return;
      }
      if(username !== user || pass !== password){
        console.log(user, password);
        showAlert();
        return;
      }
        navigation.navigate('Home',{username});
    };

    const showAlert = () =>
      Alert.alert(
        'Error',
        'Usuario o contraseña incorrectos',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );


    const Register = () => {
      navigation.navigate('Register')
    }

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
                value={pass}
                onChangeText={setPassword}
                />
                <View style={styles.buttonLogin}>
                    <Button  title='Iniciar' onPress={handleLogin} />
                </View>
                <Button title='Registrarse' onPress={Register} />
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
