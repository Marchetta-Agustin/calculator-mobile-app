import { globalStyles } from "@/styles/global-styles";
import { TextInputProps, View, Text, TextInput } from "react-native";

interface Props extends TextInputProps {
    label: string,
    value: string,
    onChangeText: (value: string) => void;
}

const AmountInput = ({ label, value, onChangeText, ...rest }: Props) => {

    const validation = (text: string) => {

        const cleanText = text
            .replace(/[^0-9.,]/g, '')     // 1. Elimina todo lo que NO sea número, punto o coma
            .replace(/,/g, (c, i, s) => i === s.indexOf(',') ? ',' : ''); // 2. Deja solo la primera coma
        onChangeText(cleanText);
    }

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
                    >{label}
                </Text>
            </View>

            <View style={ globalStyles.containerValueMoney }>
                <TextInput
                    style={ globalStyles.textInput }
                    placeholder="0"
                    placeholderTextColor="#888"
                    onChangeText={validation}
                    keyboardType="decimal-pad"
                    numberOfLines={1}
                    maxLength={17}
                    value={value}
                    {...rest}
                    >
                </TextInput>
            </View>
        </View>
    )
}

export default AmountInput;