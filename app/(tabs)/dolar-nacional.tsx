import React, { useState } from 'react';
import { Text, ActivityIndicator, View, } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import ScreenContainer from "@/components/ScreenContainer";
import { useDolarApi } from "@/hooks/useDolarApi";
import { SelectOptionsButton } from '@/components/SelectOptionsButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import AmountInput from '@/components/AmountInput';
import AmountResult from '@/components/AmountResult';
import calcularConversion from '@/utils/calcularConversion';
import Loading from '@/components/Loading';
import ErrorScreen from '@/components/ErrorScreen';


// Definimos las opciones con 'as const' para que TS extraiga los valores exactos
const opcionesFiltroMoneda = [
    { label: 'Oficial', value: 'oficial' },
    { label: 'Blue', value: 'blue' },
] as const;

const opcionesFiltroModo = [
    { label: 'Venta', value: 'venta'},
    { label: 'Compra', value: 'compra' },
] as const;

const DolarNacionalScreen = () => {

    const [valueInput, setValueInput] = useState("");

    // Tipamos el estado inicialmente con uno de los valores del array
    const [filtroMoneda, setFiltroMoneda] = useState<typeof opcionesFiltroMoneda[number]['value']>('oficial');
    const [filtroModo, setFiltroModo] = useState<typeof opcionesFiltroModo[number]['value']>('venta');
    
    const {
        loading,
        error,
        oficialData,
        blueData,
    } = useDolarApi();

    // Renderizado condicional según el estado
    if (loading) return (
        <ScreenContainer>
            <Loading />
        </ScreenContainer>
    );

    if (error) return(
        <ErrorScreen message={error}/>
    );

    console.log("----- INFORMACIÓN OFICIAL -----");
    console.log(oficialData);
    console.log(" ");
    console.log("----- INFORMACIÓN BLUE -----");
    console.log(blueData);
    return (
        <ScreenContainer>

            <SafeAreaView  style={globalStyles.screen} >
                {/* Selector de Moneda */}
                <SelectOptionsButton
                    options={opcionesFiltroMoneda}
                    selected={filtroMoneda}
                    onSelect={(nuevoValor) => setFiltroMoneda(nuevoValor) }
                />

                {/* // Input que permite ingresar el numero a conversionar */}
                <View style={ globalStyles.containerComponentInput }>
                    <Text style={ globalStyles.textInput }>
                        Ingrese el valor a convertir:
                    </Text>
                    <AmountInput 
                    label={filtroModo === 'venta' ? "ARG$" : "USD$"}
                    value={valueInput}
                    onChangeText={(input) => setValueInput(input)}
                    />
                </View>

                {/* Selector de Modo (Venta/Compra) */}
                <SelectOptionsButton
                    options={opcionesFiltroModo}
                    selected={filtroModo}
                    onSelect={(nuevoValor) => setFiltroModo(nuevoValor)}
                />

                {/* // Output que muestra la conversion calculada */}
                <View style={ globalStyles.containerComponentInput }>
                    <Text style={ globalStyles.textInput }>
                        Valor de conversión:
                    </Text>
                    <AmountResult 
                    label={filtroModo === 'venta' ? "USD$" : "ARG$"}
                    value={calcularConversion(valueInput, filtroMoneda, filtroModo, oficialData, blueData)}
                    />
                </View>

                {/* // Text que muestra los valores de cada dolar en su compra y venta */}
                <View style={ globalStyles.containerDataDolar }>
                    <Text style={ globalStyles.textInput }>
                        Compra: $ { filtroMoneda === "oficial" ? oficialData?.compra : blueData?.compra }
                    </Text>
                    <Text> </Text>
                    <Text style={ globalStyles.textInput }>
                        Venta: $ { filtroMoneda === "oficial" ? oficialData?.venta : blueData?.venta }
                    </Text>
                </View>

            </SafeAreaView>
        </ScreenContainer>

    );
};

export default DolarNacionalScreen;