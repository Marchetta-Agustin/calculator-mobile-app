import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface SegmentedToggleProps<T extends string> {
  options: readonly { label: string; value: T }[];
  selected: T;
  onSelect: (value: T) => void;
}

export function SelectOptionsButton<T extends string>({
    options,
    selected,
    onSelect,
}: SegmentedToggleProps<T>) {
    return (
        <View style={globalStyles.containerButtonOptions}>
            {options.map((option) => {
                const isSelected = selected === option.value;
                
                return (
                    <TouchableOpacity
                        key={option.value}
                        style={[
                            globalStyles.buttonOptions, 
                            isSelected && globalStyles.buttonOptionsSelected
                        ]}
                        onPress={() => onSelect(option.value)}
                        activeOpacity={0.7}
                    >
                        <Text style={[globalStyles.text, isSelected && globalStyles.textSelected]}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
