/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ShopInformation from './src/screens/ShopInformation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
