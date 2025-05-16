import react from "react";
import { Button, View } from "react-native";
import { useRouter } from 'expo-router';


export default function SettingsScreen() {
    
    const router = useRouter();
    
    return (
        <View>
            Estou na tela de configuração

            <Button title="Ir Para Opções" onPress={() => router.push('/options/details')}/>
        </View>);


    }
