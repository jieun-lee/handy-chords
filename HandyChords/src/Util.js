// TODO: update based on new labels
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
            return ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
        case 'C#':
            return ['C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'B#'];
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
