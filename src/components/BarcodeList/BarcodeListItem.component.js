import React from 'react';
import {
    View,
    Text
} from 'react-native';

const BarcodeListItemComponent = (props) => {
    return (
        <View>
            <Text>{props.barcode}</Text>
        </View>
    );
};
export default BarcodeListItemComponent;
