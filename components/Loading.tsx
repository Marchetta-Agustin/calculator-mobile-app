import { ActivityIndicator, Text } from "react-native";
import ScreenContainer from "./ScreenContainer"; // Ajusta la ruta si es necesario
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";

const Loading = () => {
    return (
        <ScreenContainer style={globalStyles.screen}>
            <ActivityIndicator size="large" color={Colors.orange} />
            <Text style={globalStyles.textLoading}>
                Cargando información ...
            </Text>
        </ScreenContainer>
    );
};

export default Loading;