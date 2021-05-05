/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './src/store';
import React from 'react';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () =>
    Node = () => {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    });
