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
    largeText: 20,
    sectionTitleText: 24,
    titleText: 36
}

const spacing = {
    xxsmallSpacing: 4,
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

    centeringWrapper: {
        alignItems: 'center'
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

    chordPickerDropdownWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: spacing.largeSpacing
    },

    chordNotesText: {
        color: colors.black,
        fontSize: fontSizes.mediumText
    },

    songPropsContainer: {
        borderColor: colors.lightMediumShade,
        borderWidth: 1
    },

    songPropsHeader: {
        backgroundColor: colors.lightMediumShade,
        flexDirection: 'row'
    },

    songPropsHeaderText: {
        fontWeight: 'bold',
        color: colors.black,
        fontSize: fontSizes.mediumText,
        flex: 11
    },
    
    toggleButton: {
        backgroundColor: colors.mediumDarkShade,
        flex: 1,
        alignItems: 'center'
    },

    songPropWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    songPropText: {
        fontSize: fontSizes.smallText,
        color: colors.black,
        fontWeight: 'bold'
    },

    songTitlebox: {
        height: 35,
        borderColor: colors.lightMediumShade,
        borderWidth: 1,
        flex: 1,
        margin: spacing.xsmallSpacing
    },

    songRowContainer: {
        width: '100%',
        backgroundColor: colors.lightMediumShade,
        height: 50,
        marginTop: spacing.xsmallSpacing,
        flexDirection: 'row',
    },

    addRowButton: {
        backgroundColor: colors.mediumShade,
        borderRadius: 50,
        width: '30%',
        alignItems: 'center',
        padding: spacing.xsmallSpacing,
        margin: spacing.xsmallSpacing
    },

    addRowButtonText: {
        color: colors.black
    },

    songBarline: {
        width: 1,
        backgroundColor: colors.black,
        height: '100%'
    },

    songMeasure: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        // padding: spacing.xxsmallSpacing,
        backgroundColor: colors.white
    },
    
    songMeasureChordsWrapper: {
        flexDirection: 'row',
    },

    songMeasureChord: {
        margin: spacing.xxsmallSpacing
    },

    songMeasureChordText: {
        color: colors.black,
    },

    // Components
    customPicker: {
        width: 120,
        // borderWidth: 1,
        // borderColor: colors.mediumDarkShade
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
        backgroundColor: colors.lightMediumShade,
        padding: spacing.smallSpacing
    },

    acBarText: {
        color: colors.black,
        fontSize: fontSizes.largeText
    },

    acExpanded: {
        backgroundColor: colors.white,
        padding: spacing.smallSpacing
    },

    acMainChord: {
        fontSize: fontSizes.mediumText,
        color: colors.black,
    },

    acSubChord: {
        fontSize: fontSizes.smallText,
        color: colors.grey,
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
