import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    tabBar: {
        backgroundColor: Colors.background,
        marginBottom: 15,
    },

    iconText: {
        color: Colors.lightGray,
        fontSize: 14,
        textAlign: "auto",
        fontFamily: "SpaceMono"
    },

    calculatorContainer: {
        flex:1,
        justifyContent: "flex-end",
        paddingBottom: 15,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 60,
        textAlign: "right",
        fontWeight: "400",
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: "right",
        fontWeight: "300",
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    button: {
        height: 70,
        width: 70,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10,
    },

    buttonText: {
        textAlign: "center",
        padding: 10,
        fontSize: 25,
        color: Colors.textPrimary,
        fontWeight: 300,
        fontFamily: "SpaceMono",
    },

    screen: {
        flex: 1,
        justifyContent: "flex-start", 
        padding: 16,
    },

    containerButtonOptions: {
        flexDirection: 'row',
        backgroundColor: Colors.darkGray,
        borderRadius: 8,
        padding: 4,
    },
    
    buttonOptions: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },

    buttonOptionsSelected: {
        backgroundColor: Colors.orange,
        // Sombras básicas para iOS y Android
        elevation: 2,
        shadowColor: '#1a1a1a',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },

    containerComponentInput: {
        backgroundColor: Colors.darkGray,
        borderRadius: 8,
        padding: 10,
        marginBlock: 40,
        gap: 10,
    },

    containerDataField: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },

    containerNameCountry: {
        height: 55,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: Colors.background,
    },

    containerValueMoney: {
        flex: 1,
        height: 55, 
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: Colors.background,
    },

    containerDataDolar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: 20
    },

    containerError: {
        flexDirection: 'row',
        backgroundColor: Colors.darkGray,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: Colors.orange,
        padding: 30,
    },

    text: {
        fontSize: 15,
        color: Colors.textPrimary,
        fontWeight: '600',
    },
    
    textSelected: {
        color: "#000000",
        fontWeight: 'bold',
    },

    textCountry: {
        fontSize: 24,
        color: Colors.textSecondary,
        fontWeight: '500',
        textAlign: "center",
    },

    textInput: {
        fontSize: 19,
        color: Colors.textPrimary,
        fontWeight: '600',
        textAlign: "left",
    },

    textLoading: {
        fontSize: 20,
        color: Colors.orange,
        fontWeight: '500',
        textAlign: "center",
    },

    textError: {
        fontSize: 20,
        color: Colors.textPrimary,
        fontWeight: '500',
        textAlign: "center",
    }
})