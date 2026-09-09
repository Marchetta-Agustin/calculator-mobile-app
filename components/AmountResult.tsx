import { globalStyles } from "@/styles/global-styles";
import { useState } from "react";
import {  View, Text } from "react-native";

interface Props {
    label: string,
    value: string,
}

const AmountResult = ({ label, value}: Props) => {
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
                <Text
                    style={ globalStyles.textInput }
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    >{value}
                </Text>
            </View>
        </View>
    )
}

export default AmountResult;