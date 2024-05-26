import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen= ({ route }) => {
    const {username} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Bienvenido!, {username}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 24,
    },
  });


export default HomeScreen;