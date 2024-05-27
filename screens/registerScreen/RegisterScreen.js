import React, { useState,useContext} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import {contexAutentication} from "../../contex/Contex";

const Register = ({navigation}) => {
    const {setUser, setPassword} = useContext(contexAutentication);
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');


    const handleRegister = () => {
        //logica de registro
        setUser(username);
        setPassword(password);
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container} >
            <Text style={styles.title}> Formulario de Registro </Text>
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
                onChangeText={setPass}
                />
                <View style={styles.buttonLogin}>
                    <Button  title='Registrarse' onPress={handleRegister} />
                </View>
        </View>
    )

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


export default Register;