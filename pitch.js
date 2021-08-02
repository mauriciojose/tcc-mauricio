

const A4 = 440
const C0 = A4*Math.pow(2, -4.75)
const notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

function pitch( freq ) {
    let h = Math.round( 12 * Math.log2( freq / C0 ) );

    let octave = Math.floor( h / 12 ) ;

    let n = h % 12;

    // return typeof notas[n] == 'undefined' ? "" :  notas[n] + octave.toString();
    return typeof notas[n] == 'undefined' ? "" :  notas[n];
}

function noteFromPitch( frequency ) {
	var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;
}

function frequencyFromNoteNumber( note ) {
	return 440 * Math.pow(2,(note-69)/12);
}

function centsOffFromPitch( frequency, note ) {
	return Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );
}


console.log( pitch( 667 ) );
console.log( noteFromPitch( 277 ) );

console.log( frequencyFromNoteNumber( 0 ) );
console.log( frequencyFromNoteNumber( 12 ) );
console.log( frequencyFromNoteNumber( 24 ) );
console.log( frequencyFromNoteNumber( 36 ) );
console.log( frequencyFromNoteNumber( 48 ) );
console.log( frequencyFromNoteNumber( 60 ) );

console.log( frequencyFromNoteNumber( 1 ) );
console.log( frequencyFromNoteNumber( 13 ) );
console.log( frequencyFromNoteNumber( 25 ) );
console.log( frequencyFromNoteNumber( 37 ) );
console.log( frequencyFromNoteNumber( 49 ) );
console.log( frequencyFromNoteNumber( 61 ) );