import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end"
    },
    resultado: {
        color: 'white',
        fontSize: 50,
        textAlign: "right",
        marginBottom: 8
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 25,
        textAlign: "right"
    },

    fila: {
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 18,
        paddingHorizontal: 10

    },

    boton: {
        width: 70,
        height: 70,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 4
    },
    botonTexto: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});
