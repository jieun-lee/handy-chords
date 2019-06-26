import {StyleSheet} from 'react-native';

export const colors = {
    lightShade: '#BDEEF9',
    lightMediumShade: '#82DDF2',
    mediumShade: '#25D0F7',
    mediumDarkShade: '#1ABBE0',
    darkShade: '#024F60',
    black: '#000000'
}

const fontSizes = {
    smallText: 14,
    mediumText: 18,
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
    // Main Page
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

    pageWrapper: {
        backgroundColor: colors.lightShade,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
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
