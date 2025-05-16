
import React from 'react';
import { Button, View } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {

    const router = useRouter();
return (
    
   <View>
    <Button title='Tabs' onPress={() => router.push('/navigation/tabs/index')} />
    <Button title='Drawer' onPress={() => router.push('/navigation/drawer/index')} />
    <Button title='Stack' onPress={() => router.push('/navigation/stack/index')} />    
   </View>
    
);

}