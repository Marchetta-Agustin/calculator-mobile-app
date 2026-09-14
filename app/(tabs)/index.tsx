import CalculatorButton from "@/components/CalculatorButton";
import ScreenContainer from "@/components/ScreenContainer";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCaculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CalculatorApp = () => {

    const {
        formula,
        prevNumber,
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult,
    } = useCaculator();

    const mostrarAviso = () => {
        Alert.alert(
            'Acción no permitida', // Título
            'No es posible introducir más de 15 dígitos.', // Mensaje
            [{ text: 'Entendido' }] // Botón de cierre
        );
    };

  return (
    <ScreenContainer style={ [globalStyles.background, globalStyles.calculatorContainer] }>
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }} edges={['top']}>

            {/* Resultados */}
            <View
                style={{ 
                    paddingHorizontal: 30, 
                    paddingBottom: 20,
                    height: 170,
                }}
            >
                <ThemeText variant="h1" >{formula}</ThemeText>
                
                <ThemeText variant="h2" >
                    {
                        formula === prevNumber ? (
                            <ThemeText variant="h2"> </ThemeText>
                        ) : (
                            <ThemeText variant="h2">{prevNumber}</ThemeText>
                        )
                    }
                    </ThemeText>

            </View>

            <View style={{ flex: 1, justifyContent: "space-between", paddingBottom: 15 }}>

                {/* Primera Filas de Botones */}
                <View style={ globalStyles.row }>

                    <CalculatorButton 
                        label="C" 
                        blackText
                        color={Colors.lightGray}
                        onPress={clean}
                    />

                    <CalculatorButton 
                        label="+/-" 
                        blackText 
                        color={Colors.lightGray}
                        onPress={toggleSign}
                    />

                    <CalculatorButton 
                        label="del" 
                        blackText
                        color={Colors.lightGray}
                        onPress={deleteLast}
                    />

                    <CalculatorButton 
                        label="÷"
                        color={Colors.orange}
                        onPress={divideOperation}
                    />

                </View>

                {/* Segunda Filas de Botones */}
                <View style={ globalStyles.row }>

                    <CalculatorButton 
                        label="7"
                        onPress={() => {
                            if (buildNumber("7") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="8" 
                        onPress={()=> {
                            if (buildNumber("8") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="9" 
                        onPress={()=> {
                            if (buildNumber("9") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="x"
                        color={Colors.orange}
                        onPress={multiplyOperation}
                    />

                </View>


                {/* Tercera Filas de Botones */}
                <View style={ globalStyles.row }>

                    <CalculatorButton 
                        label="4"
                        onPress={()=> {
                            if (buildNumber("4") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="5"
                        onPress={()=> {
                            if (buildNumber("5") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="6"
                        onPress={()=> {
                            if (buildNumber("6") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="-"
                        color={Colors.orange}
                        onPress={subtractOperation}
                    />

                </View>


                {/* Cuarta Filas de Botones */}
                <View style={ globalStyles.row }>

                    <CalculatorButton 
                        label="1"
                        onPress={()=> {
                            if (buildNumber("1") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="2"
                        onPress={()=> {
                            if (buildNumber("2") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="3"
                        onPress={()=> {
                            if (buildNumber("3") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="+"
                        color={Colors.orange}
                        onPress={addOperation}
                    />

                </View>


                {/* Quinta Filas de Botones */}
                <View style={ globalStyles.row }>

                    <CalculatorButton 
                        label="0"
                        doubleSize
                        onPress={()=> {
                            if (buildNumber("0") === true) {
                                mostrarAviso();
                            }
                        }}
                    />

                    <CalculatorButton 
                        label="."
                        onPress={()=> buildNumber(".")}
                    />

                    <CalculatorButton 
                        label="="
                        color={Colors.orange}
                        onPress={calculateResult}
                    />

                </View>
            </View>
        </SafeAreaView>
    </ScreenContainer>
  )
}

export default CalculatorApp;