import React from 'react';
import {
  SafeAreaView,
  Button
} from 'react-native';
import ProductListComponent from "../components/ProductList/ProductList.component";

const HomeScreen = (props) => {
  return (
    <SafeAreaView>
        <ProductListComponent />
        <Button title="Start Audit" onPress={() => { props.navigation.navigate('Scan', {})}} />
    </SafeAreaView>
  );
};
export default HomeScreen;
