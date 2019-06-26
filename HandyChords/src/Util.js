export function getErrorMessage() {
    return 'An unexpected error has occurred. Please exit and restart the app.';
}

export function getPageNameFromLabel(label) {
    switch(label) {
      case 'Chord':
        return 'Chord Notes';
      case 'Transpose':
        return 'Quick Transpose';
      case 'Available':
        return 'Available Chord';
      case 'Memo':
        return 'Chord Memo';
      default:
        return label;
    }
}

// index: 0 1 2 3 4 5 6 7 8 9 10 11
// notes: 1   2   3 4   5   6     7
export function getKeySet(key) {
    // TODO: decide whether I want to change to common vs keep as-is
    switch(key) {
        case 'C':
            return ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'G#', 'A', 'Bb', 'B'];
        case 'C#':
            return ['C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'Gx', 'A#', 'B', 'B#'];
        case 'Db':
            return ['Db', 'D', 'Eb', 'Fb', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb', 'C'];
        case 'D':
            return ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];
        case 'D#':
            return ['D#', 'Dx', 'E#', 'F#', 'Fx', 'G#', 'Gx', 'A#', 'Ax', 'B#', 'C#', 'Cx'];
        case 'Eb':
            return ['Eb', 'Fb', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb', 'C', 'Db', 'D'];
        case 'E':
            return ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
        case 'F':
            return ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E'];
        case 'F#':
            return ['F#', 'G', 'G#', 'A', 'A#', 'B', 'B#', 'C#', 'D', 'D#', 'E', 'E#'];
        case 'Gb':
            return ['Gb', 'G', 'Ab', 'A', 'Bb', 'Cb', 'C', 'Db', 'D', 'Eb', 'Fb', 'F'];
        case 'G':
            return ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'];
        case 'G#':
            return ['G#', 'Gx', 'A#', 'Ax', 'B#', 'C#', 'Cx', 'D#', 'Dx', 'E#', 'F#', 'Fx'];
        case 'Ab':
            return ['Ab', 'A', 'Bb', 'Cb', 'C', 'Db', 'D', 'Eb', 'Fb', 'F', 'Gb', 'G'];
        case 'A':
            return ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        case 'A#':
            return ['A#', 'Ax', 'B#', 'C#', 'Cx', 'D#', 'Dx', 'E#', 'F#', 'Fx', 'G#', 'Gx'];
        case 'Bb':
            return ['Bb', 'Cb', 'C', 'Db', 'D', 'Eb', 'Fb', 'F', 'Gb', 'G', 'Ab', 'A'];
        case 'B':
            return ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'];
        default:
            return [];
    }
}

export function getChordIndex(chord) {
    switch(chord) {
        case 'm':
            return [0, 3, 7];
        case 'aug':
            return [0, 4, 8];
        case 'dim':
            return [0, 3, 6];
        case '7':
            return [0, 4, 7, 10];
        case 'M7':
            return [0, 4, 7, 11];
        case 'm7':
            return [0, 3, 7, 10];
        case 'mM7':
            return [0, 3, 7, 11];
        case 'dim7':
            return [0, 3, 6, 9];
        case 'm7(b5)':
            return [0, 3, 6, 10];
        case 'add2':
            return [0, 2, 4, 7];
        case 'sus4':
            return [0, 5, 7];
        case '6':
            return [0, 4, 7, 9];
        case 'm6':
            return [0, 3, 7, 9];
        default: // Major Triad
            return [0, 4, 7];
    }
}

// TODO: handle case where user doesn't specify the 7th chord
export function tensionToIndex(tension) {
    switch(tension) {
        case 'b9':
            return 1;
        case '9':
            return 2;
        case '#9':
            return 3;
        case 'b11':
            return 4;
        case '11':
            return 5;
        case '#11':
            return 6;
        case 'b13':
            return 8;
        case '13':
            return 9;
        case '#13':
            return 10;
        default:
            return '';
    }
}