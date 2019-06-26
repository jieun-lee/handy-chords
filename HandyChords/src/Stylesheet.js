import {StyleSheet} from 'react-native';

export const colors = {
    white: '#FFFFFF',
    lightShade: '#BDEEF9',
    lightMediumShade: '#82DDF2',
    mediumShade: '#25D0F7',
    mediumDarkShade: '#1ABBE0',
    darkShade: '#024F60',
    grey: '#888888',
    black: '#000000'
}

const fontSizes = {
    smallText: 14,
    mediumText: 18,
    sectionTitleText: 24,
    titleText: 36
}

const spacing = {
    xsmallSpacing: 8,
    smallSpacing: 12,
    mediumSpacing: 16,
    largeSpacing: 20,
    xlargeSpacing: 24
}

////////////////////////////////////////////////////////

export default StyleSheet.create({
    // Main Page Layout
    mainBackground: {
        backgroundColor: colors.lightShade,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    mainTitle: {
        color: colors.black,
        fontSize: fontSizes.titleText,
        fontWeight: 'bold',
        marginBottom: spacing.largeSpacing
    },

    screenWrapper: {
        backgroundColor: colors.lightShade,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },

    pageWrapper: {
        padding: spacing.mediumSpacing
    },

    sectionTitle: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: fontSizes.sectionTitleText,
        textAlign: 'center',
        margin: spacing.smallSpacing
    },

    // Specific Pages
    keyPickerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    // Components
    keyPicker: {
        width: 150
    },

    tchartMainChord: {
        color: colors.black,
        fontSize: fontSizes.mediumText
    },

    tchartSubChord: {
        color: colors.grey,
        fontSize: fontSizes.smallText
    },

    acWrapper: {
        //
    },

    acBar: {
        backgroundColor: colors.lightMediumShade
    },

    acBarText: {
        color: colors.black,
        fontSize: fontSizes.mediumText
    },

    acExpanded: {
        backgroundColor: colors.white,
        height: 100
    },

    // Nav
    navButton: {
        backgroundColor: colors.mediumShade,
        justifyContent: 'center',
    },

    navButtonRound: {
        width: 120,
        height: 120,
        borderRadius: 100,
        margin: spacing.smallSpacing,
        padding: spacing.mediumSpacing
    },

    navButtonFlat: {
        flex: 1,
        padding: spacing.mediumSpacing
    },

    navButtonSelected: {
        backgroundColor: colors.mediumDarkShade
    },

    navText: {
        color: colors.black,
        fontSize: fontSizes.smallText,
        textAlign: 'center'
    },

    navTextRound: {
        fontSize: fontSizes.mediumText,
    },

    navPanelRow: {
        flexDirection: 'row'
    },

    navBar: {
        flexDirection: 'row',
    },
});
