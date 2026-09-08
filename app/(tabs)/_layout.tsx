import { Tabs } from "expo-router";
import { globalStyles } from "@/styles/global-styles";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";

const colorIcon = Colors.icon;
const iconSelected = Colors.iconSelected;
const iconSize = 30;

const TabsLayout = () => {
    return(

        <Tabs screenOptions={{ 
            headerShown: false,
            tabBarStyle: globalStyles.tabBar,
            tabBarActiveTintColor: iconSelected, 
            }}>

            <Tabs.Screen 
                name="index"
                options={{
                    title: "Calculadora",
                    tabBarLabelStyle: globalStyles.iconText,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name="calculator" 
                            size={iconSize} 
                            color={focused ? iconSelected : colorIcon} 
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="dolar-nacional"
                options={{ 
                    title: "Dolar",
                    tabBarLabelStyle: globalStyles.iconText,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name="logo-usd" 
                            size={iconSize} 
                            color={focused ? iconSelected : colorIcon} 
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="global"
                options={{ 
                    title: "Global",
                    tabBarLabelStyle: globalStyles.iconText,
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name="globe-outline" 
                            size={iconSize} 
                            color={focused ? iconSelected : colorIcon} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;