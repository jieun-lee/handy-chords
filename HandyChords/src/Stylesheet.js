import {StyleSheet} from 'react-native';

////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////

const colors = {
    lightBlue: '#BDEEF9',
    black: '#000000'
}

const fontSizes = {
    titleText: 26
}

////////////////////////////////////////////////////////
// STYLES
////////////////////////////////////////////////////////

export default StyleSheet.create({
    // Main Page
    mainTitle: {
        color: colors.black,
        fontSize: fontSizes.titleText,
        width: '100%',
        height: '100%',
    },

    mainBackground: {
        backgroundColor: colors.lightBlue
    }
});
