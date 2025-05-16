import { Slot, Tabs } from "expo-router";
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarInactiveTintColor: 'blue' }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'incio',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name='about'
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color, size }) => <Ionicons name="information-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'configurações',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                }}
            />zzzzzz
        </Tabs>

    );
}
