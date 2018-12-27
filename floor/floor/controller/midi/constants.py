
# Maps pymidi note identifiers to their more conventional names.
MIDI_NOTE_NAMES = {
    'Cn1': 'C-1',
    'Csn1': 'C#-1',
    'Dn1': 'D-1',
    'Dsn1': 'D#-1',
    'En1': 'E-1',
    'Fn1': 'F-1',
    'Fsn1': 'F#-1',
    'Gn1': 'G-1',
    'Gsn1': 'G#-1',
    'An1': 'A-1',
    'Asn1': 'A#-1',
    'Bn1': 'B-1',
    'C0': 'C0',
    'Cs0': 'C#0',
    'D0': 'D0',
    'Ds0': 'D#0',
    'E0': 'E0',
    'F0': 'F0',
    'Fs0': 'F#0',
    'G0': 'G0',
    'Gs0': 'G#0',
    'A0': 'A0',
    'As0': 'A#0',
    'B0': 'B0',
    'C1': 'C1',
    'Cs1': 'C#1',
    'D1': 'D1',
    'Ds1': 'D#1',
    'E1': 'E1',
    'F1': 'F1',
    'Fs1': 'F#1',
    'G1': 'G1',
    'Gs1': 'G#1',
    'A1': 'A1',
    'As1': 'A#1',
    'B1': 'B1',
    'C2': 'C2',
    'Cs2': 'C#2',
    'D2': 'D2',
    'Ds2': 'D#2',
    'E2': 'E2',
    'F2': 'F2',
    'Fs2': 'F#2',
    'G2': 'G2',
    'Gs2': 'G#2',
    'A2': 'A2',
    'As2': 'A#2',
    'B2': 'B2',
    'C3': 'C3',
    'Cs3': 'C#3',
    'D3': 'D3',
    'Ds3': 'D#3',
    'E3': 'E3',
    'F3': 'F3',
    'Fs3': 'F#3',
    'G3': 'G3',
    'Gs3': 'G#3',
    'A3': 'A3',
    'As3': 'A#3',
    'B3': 'B3',
    'C4': 'C4',
    'Cs4': 'C#4',
    'D4': 'D4',
    'Ds4': 'D#4',
    'E4': 'E4',
    'F4': 'F4',
    'Fs4': 'F#4',
    'G4': 'G4',
    'Gs4': 'G#4',
    'A4': 'A4',
    'As4': 'A#4',
    'B4': 'B4',
    'C5': 'C5',
    'Cs5': 'C#5',
    'D5': 'D5',
    'Ds5': 'D#5',
    'E5': 'E5',
    'F5': 'F5',
    'Fs5': 'F#5',
    'G5': 'G5',
    'Gs5': 'G#5',
    'A5': 'A5',
    'As5': 'A#5',
    'B5': 'B5',
    'C6': 'C6',
    'Cs6': 'C#6',
    'D6': 'D6',
    'Ds6': 'D#6',
    'E6': 'E6',
    'F6': 'F6',
    'Fs6': 'F#6',
    'G6': 'G6',
    'Gs6': 'G#6',
    'A6': 'A6',
    'As6': 'A#6',
    'B6': 'B6',
    'C7': 'C7',
    'Cs7': 'C#7',
    'D7': 'D7',
    'Ds7': 'D#7',
    'E7': 'E7',
    'F7': 'F7',
    'Fs7': 'F#7',
    'G7': 'G7',
    'Gs7': 'G#7',
    'A7': 'A7',
    'As7': 'A#7',
    'B7': 'B7',
    'C8': 'C8',
    'Cs8': 'C#8',
    'D8': 'D8',
    'Ds8': 'D#8',
    'E8': 'E8',
    'F8': 'F8',
    'Fs8': 'F#8',
    'G8': 'G8',
    'Gs8': 'G#8',
    'A8': 'A8',
    'As8': 'A#8',
    'B8': 'B8',
    'C9': 'C9',
    'Cs9': 'C#9',
    'D9': 'D9',
    'Ds9': 'D#9',
    'E9': 'E9',
    'F9': 'F9',
    'Fs9': 'F#9',
    'G9': 'G9',
}

# Convenience aliases for pymidi commands
COMMAND_NOTE_ON = 'note_on'
COMMAND_NOTE_OFF = 'note_off'
COMMAND_CONTROL_MODE_CHANGE = 'control_mode_change'
SUPPORTED_COMMANDS = (COMMAND_NOTE_ON, COMMAND_NOTE_OFF, COMMAND_CONTROL_MODE_CHANGE)