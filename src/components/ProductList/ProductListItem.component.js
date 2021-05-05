import React from 'react';
import {
    View,
    Text, StyleSheet
} from 'react-native';

const ProductListItemComponent = (props) => {
    return (
        <View style={styles.card}>
            <Text>This is a product entry</Text>
            <Text>{props.product.barcode}</Text>
            <Text>{props.product.itemId}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 15,
        backgroundColor: 'rgba(187,187,187,0.58)'
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,
        //
        // elevation: 2,
    }
})
export default ProductListItemComponent;
