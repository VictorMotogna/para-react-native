import { AsyncStorage, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
global.widht = width;
global.height = height;
global.statusBar = Platform.OS === "ios" && height === 812 ? 31 : 20;
global.primaryColor = "#3E3962";

