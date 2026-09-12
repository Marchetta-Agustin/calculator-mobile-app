import { Modal, FlatList, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { ListCountries } from "@/data/currencies";
import { globalStyles } from "@/styles/global-styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { MonedaCodigo } from "@/app/(tabs)/global";

interface Props {
    visible: boolean;
    onClose: () => void;
    onSelect: (moneda: MonedaCodigo) => void;
}

const CurrencyPickerModal = ({ visible, onClose, onSelect }: Props) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={globalStyles.modalOverlay}>
                <SafeAreaView style={globalStyles.modalContent}>
                    <Text style={globalStyles.modalTitle}>Seleccione la divisa:</Text>

                    <FlatList
                        style={globalStyles.flatListData}
                        data={ListCountries}
                        keyExtractor={(item) => item.code}
                        renderItem={({ item }) => (
                            <Pressable
                                style={globalStyles.currencyRow}
                                onPress={() => onSelect(item)}
                            >
                                <Text style={globalStyles.currencyRowText}>
                                    {item.code} - {item.name}
                                </Text>
                                <Image
                                    source={{ uri: `https://flagcdn.com/w80/${item.countryCode}.png` }}
                                    style={{ width: 40, height: 30 }}
                                />
                            </Pressable>
                        )}
                    />
                </SafeAreaView>
            </View>
        </Modal>
    );
};

export default CurrencyPickerModal;