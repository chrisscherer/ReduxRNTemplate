import React from 'react';
import {
    Text,
    FlatList, View
} from 'react-native';
import BarcodeListItemComponent from "./BarcodeListItem.component";
import {useSelector} from "react-redux";

const BarcodeListComponent = (props) => {
    const scannedBarcodes = useSelector((state) => state.audit.items);

    return (
        <View>
            <Text>This is the barcode list</Text>
            <FlatList data={scannedBarcodes} keyExtractor={(item, index) => index} renderItem={({item}) => <BarcodeListItemComponent barcode={item} />} />
        </View>
    );
};
export default BarcodeListComponent;
