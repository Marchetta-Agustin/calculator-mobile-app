import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { Pressable, Text } from "react-native";
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean
    onPress: () => void;
}

const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    doubleSize = false,
    onPress }: Props) => {
    return (
        <Pressable 
            style={( { pressed } ) => ({

                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.5 : 1,
                /* backgroundColor: pressed
                    ? (color === Colors.orange 
                    ? Colors.orangePressed : Colors.lightGrayPressed)
                    : color, */
                width: doubleSize ? 160 : 70,
            })}
            onPress={() => {
                /* Cada vez q tocamos algun boton, el celular vibra */
                Haptics.selectionAsync();
                onPress();
            }}
        >

            <Text 
                style={{
                    /* operador spred */
                    ...globalStyles.buttonText,

                    /* Aca lo q hacemos es una destructuracion q nos permite podes sobrescribir el css y hacer cuestiones de logicas, como preguntar si la var blackText es true o false */
                    color: blackText ? "black" : "white",
                }}
            >{ label }</Text>

        </Pressable>
    )
}

export default CalculatorButton;