import React from "react";
import { View, Button } from "react-native";
import { useRouter } from 'expo-router'

export default function OptionsScreen(){
    
    const router = useRouter();
    return (
        <View>
            Options Page
            <Button title="Details" onPress={() => router.push('/navigation/stack/details')}/>
        </View>
            
    )
}