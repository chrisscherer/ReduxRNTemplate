import React from 'react';
import {
    Text,
    FlatList, View
} from 'react-native';
import { useSelector } from "react-redux";
import ProductListItemComponent from "./ProductListItem.component";

const ProductListComponent = (props) => {
    const scannedBarcodes = useSelector((state) => state.audit.products);

    return (
        <View>
            <Text>This is the product list</Text>
            <FlatList data={scannedBarcodes} keyExtractor={(item, index) => index} renderItem={({item}) => <ProductListItemComponent product={item} />} />
        </View>
    );
};
export default ProductListComponent;
