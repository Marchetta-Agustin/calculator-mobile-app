import { globalStyles } from "@/styles/global-styles";
import { View, ViewStyle, StyleProp } from "react-native";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
} 

const ScreenContainer = ({children, style} : Props) => {
    return(
         
        <View style={[ globalStyles.background, style ]}>
            {children}
        </View>
    );
};

export default ScreenContainer;