import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import { useDispatch } from "react-redux";
import { addItem, findProductByBarcode } from "../reducers/audit.slice";
import BarcodeListComponent from "../components/BarcodeList/BarcodeList.component";

const ScanScreen = (props) => {
    const dispatch = useDispatch();

    function onBarcodeScanned() {
        dispatch(addItem('1010100010'));
        dispatch(findProductByBarcode('1010100010')).then(() => {console.log("product list updated")});
    }

    return (
        <SafeAreaView>
            <BarcodeListComponent />
            <TouchableOpacity style={styles.button} onPress={onBarcodeScanned}>
                <Text>Scan Barcode</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Home', {}) }} >
                <Text>Done</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#2774af",
        padding: 10,
        marginTop: 10,
    }
})

export default ScanScreen;
