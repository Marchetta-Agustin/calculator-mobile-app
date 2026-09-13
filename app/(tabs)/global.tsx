import ScreenContainer from "@/components/ScreenContainer";
import { useState } from "react";
import { ListCountries, Moneda } from "@/data/currencies";
import { useGlobalApi } from "@/hooks/useGlobalApi";
import Loading from "@/components/Loading";
import ErrorScreen from "@/components/ErrorScreen";
import { Text, View, Pressable} from "react-native";
import { globalStyles } from "@/styles/global-styles";
import AmountInput from "@/components/AmountInput";
import AmountResult from "@/components/AmountResult";
import CurrencyPickerModal from "@/components/CurrencyPickerModal";
import calcularConversionGlobal from "@/utils/calcularConversionGlobal";
import { SafeAreaView } from "react-native-safe-area-context";

type CampoActivo = "origen" | "destino" | null;

const GlobalScreen = () => {

    const objetoInicialUSD = ListCountries.find(m => m.code === 'USD')!;
    const objetoInicialARS = ListCountries.find(m => m.code === 'ARS')!;

    const [valueInput, setValueInput] = useState("");
    const [monedaOrigen, setMonedaOrigen] = useState<Moneda>(objetoInicialARS);
    const [monedaDestino, setMonedaDestino] = useState<Moneda>(objetoInicialUSD);
    const [modalVisible, setModalVisible] = useState(false);
    const [campoActivo, setCampoActivo] = useState<CampoActivo>(null);

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
        <ScreenContainer>

            <SafeAreaView style={globalStyles.screen}>

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

                    <Pressable
                    style={globalStyles.buttonModal}
                    onPress={() => {setModalVisible(true); setCampoActivo("origen")}}
                    >
                        <Text
                        style={globalStyles.textSelected}>Abrir Modal</Text>
                    </Pressable>
                </View>


                {/* // Output que muestra la conversion calculada */}
                <View style={ globalStyles.containerComponentInput }>
                    <Text style={ globalStyles.textInput }>
                        Valor de conversión:
                    </Text>
                    <AmountResult 
                    label={monedaDestino.code}
                    value={DataApi !== undefined ? calcularConversionGlobal(valueInput, DataApi) : "Error"}
                    />

                    <Pressable
                    style={globalStyles.buttonModal}
                    onPress={() => {setModalVisible(true); setCampoActivo("destino")}}
                    >
                        <Text
                        style={globalStyles.textSelected}>Abrir Modal</Text>
                    </Pressable>
                </View>

                {/* Componente (Modal) que se activa cunado el state modalVisible cambia a true */}
                <CurrencyPickerModal 
                    visible={modalVisible}
                    onClose={() => {
                        setModalVisible(false);
                        setCampoActivo(null);
                    }}
                    onSelect={(moneda:Moneda) => {
                        setModalVisible(false);

                        if(campoActivo === "origen"){
                            setMonedaOrigen(moneda);
                            setCampoActivo(null);
                        }

                        if(campoActivo === "destino"){
                            setMonedaDestino(moneda);
                            setCampoActivo(null);
                        }
                    }}  
                />

                {/* // Text que muestra la ultima actualizacion de la moneda */}
                <View style={ globalStyles.containerData }>
                    <Text style={globalStyles.textInformation}>
                        Cotización del {DataApi?.fechaActualizacion}
                    </Text>
                </View>
            </SafeAreaView>
        </ScreenContainer>
    );
};

export default GlobalScreen;