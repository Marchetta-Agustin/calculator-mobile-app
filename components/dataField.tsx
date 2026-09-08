import { globalStyles } from "@/styles/global-styles";
import { useState } from "react";
import { TextInputProps, View, Text, TextInput } from "react-native";


interface Props extends TextInputProps {
    value: string,
    input: string
    isInputField?: boolean,
}

const DataField = ({ value, input, isInputField=true, ...rest }: Props) => {

    const [text, setText] = useState('');

        // Cambia dinámicamente el tamaño basándose en el largo del texto
        const getFontSize = () => {
            if (input.length > 20) return 13;
            if (input.length > 12) return 15;
            return 18; // Tamaño base
        };
        
        if (isInputField) {

            return (
                <View style={ globalStyles.containerDataField }>

                    <View style={ 
                        globalStyles.containerNameCountry 

                        }>
                        <Text
                            style={ 
                                globalStyles.textCountry
                            }
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            >{value}
                        </Text>
                    </View>

                    <View style={ globalStyles.containerValueMoney }>
                        <TextInput
                            style={ 
                                [globalStyles.textInput,
                                {fontSize: getFontSize()}
                                ]}
                            onChangeText={setText}
                            numberOfLines={1}
                            value={input}
                            {...rest}
                            >
                        </TextInput>
                    </View>
                </View>
            )
        } else {

            return (
                <View style={ globalStyles.containerDataField }>

                    <Text>{value}</Text>
                </View>
            )
        }
}
        

export default DataField;