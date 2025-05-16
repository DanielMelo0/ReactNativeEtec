
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Bem-Vindo Ao Meu App!</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Reset" onPress={() => {setCount(0)}}/>
            
        </View>
    );
}