import React, { useState } from 'react';
import { Text, ActivityIndicator, View, } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import ScreenContainer from "@/components/ScreenContainer";
import { useDolarApi } from "@/hooks/useDolarApi";
import { SelectOptionsButton } from '@/components/SelectOptionsButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import DataField from '@/components/dataField';

// Definimos las opciones con 'as const' para que TS extraiga los valores exactos
const opcionesFiltroMoneda = [
    { label: 'Oficial', value: 'oficial' },
    { label: 'Blue', value: 'blue' },
] as const;

const opcionesFiltroModo = [
    { label: 'Venta', value: 'venta' },
    { label: 'Compra', value: 'compra' },
] as const;

const DolarNacionalScreen = () => {

    // Tipamos el estado inicialmente con uno de los valores del array
    const [filtroMoneda, setFiltroMoneda] = useState<typeof opcionesFiltroMoneda[number]['value']>('oficial');
    const [filtroModo, setFiltroModo] = useState<typeof opcionesFiltroModo[number]['value']>('venta');
    
    const {
        loading,
        error,
        oficialData,
        blueData,
    } = useDolarApi();

    // 2. Renderizado condicional según el estado
    if (loading) return (
        <ScreenContainer style={globalStyles.screen}>
            <ActivityIndicator size="large" color={Colors.orange} />

            <Text
                style={globalStyles.textLoading}
                >Cargando información ...{error}</Text>
        </ScreenContainer>
    );

    if (error) return(

        <ScreenContainer style={globalStyles.screen}>
            <View style={globalStyles.containerError}>
                <Text
                    style={globalStyles.textError}
                >Hubo un problema: {error}</Text>
            </View>
        </ScreenContainer>
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
                    onSelect={(nuevoValor) => setFiltroMoneda(nuevoValor)}
                />

                //TODO componente propio q sea el input
                <DataField 
                    value='ARG$'
                    input='1230000000000'
                />

                {/* Selector de Modo (Venta/Compra) */}
                <SelectOptionsButton
                    options={opcionesFiltroModo}
                    selected={filtroModo}
                    onSelect={(nuevoValor) => setFiltroModo(nuevoValor)}
                />

                //TODO componente propio q sea el output
                <DataField 
                    value='USD$'
                    input='123'
                />

                //TODO text q muestra el precio de compra y venta del dolar

            </SafeAreaView>
        </ScreenContainer>

    );
};

export default DolarNacionalScreen;