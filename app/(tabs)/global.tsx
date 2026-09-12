import ScreenContainer from "@/components/ScreenContainer";
import { Image } from "expo-image";
import { useState } from "react";
import { ListCountries } from "@/data/currencies";
import { useGlobalApi } from "@/hooks/useGlobalApi";
import Loading from "@/components/Loading";
import ErrorScreen from "@/components/ErrorScreen";
import { Text, View } from "react-native";
import { globalStyles } from "@/styles/global-styles";
import AmountInput from "@/components/AmountInput";

type MonedaCodigo = typeof ListCountries[number];
type CampoActivo = "inicio" | "modal" | null;

const GlobalScreen = () => {

    const objetoInicialUSD = ListCountries.find(m => m.code === 'USD')!;
    const objetoInicialARS = ListCountries.find(m => m.code === 'ARS')!;

    const [valueInput, setValueInput] = useState("");
    const [monedaOrigen, setMonedaOrigen] = useState<MonedaCodigo>(objetoInicialARS);
    const [monedaDestino, setMonedaDestino] = useState<MonedaCodigo>(objetoInicialUSD);
    const [modalActive, setModalActive] = useState(false);

    const {
        loading,
        error,
        DataApi
    } = useGlobalApi(monedaOrigen.code, monedaDestino.code);

    if (loading) return (
        <Loading />
    );

    if (error) return(
        <ErrorScreen message={error}/>
    );

    console.log("----- INFORMACIÓN API -----");
    console.log(DataApi);
    

    return(

        <ScreenContainer style={{ alignItems: "center", justifyContent:"center"}}>

            {/* // Input que permite ingresar el numero a conversionar */}
            <View style={ globalStyles.containerComponentInput }>
                <Text style={ globalStyles.textInput }>
                    Ingrese el valor a convertir:
                </Text>
                <AmountInput 
                label={monedaOrigen.code}
                value={valueInput}
                onChangeText={(input) => setValueInput(input)}
                />
            </View>

        </ScreenContainer>
    );
};

export default GlobalScreen;