import { View, Text } from "react-native";
import ScreenContainer from "./ScreenContainer"; // Ajusta la ruta si es necesario
import { globalStyles } from "@/styles/global-styles";

interface Props {
    message: string;
}

const ErrorScreen = ({ message }: Props) => {
    return (
        <ScreenContainer style={globalStyles.screen}>
            <View style={globalStyles.containerError}>
                <Text style={globalStyles.textError}>
                    Hubo un problema: {message}
                </Text>
            </View>
        </ScreenContainer>
    );
};

export default ErrorScreen;
